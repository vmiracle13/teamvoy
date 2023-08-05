import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ItemType } from '../types/types';

import { LIMIT } from '../constants';

export type RootState = {
  items: {
    data: ItemType[],
    status: 'loading' | 'pending' | 'success' | 'failed',
    error: null | string | undefined,
  }
  totalCount: number,
  selectedItem: ItemType | null | undefined,
  types: {
    status: 'loading' | 'pending' | 'success' | 'failed',
    error: null | string | undefined,
    data: string[],
  }
}

const initialState: RootState = {
  items: {
    data: [],
    status: "loading",
    error: null,
  },
  totalCount: 0,
  selectedItem: null,
  types: {
    status: "loading",
    error: null,
    data: [],
  }
};

const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async (offset: number) => {
    const response =
      await axios(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${LIMIT}`);
    const json = response.data.results;

    const list = json.map(async (item: ItemType) => {
      const hero = await axios(`${item.url} `);
      return hero.data;
    });

    return { items: await Promise.all(list), totalCount: response.data.count };
  }
);

const fetchTypes = createAsyncThunk(
  "items/fetchTypes",
  async () => {
    const response =
      await axios(`https://pokeapi.co/api/v2/type?limit=999`);
    return response.data.results.map((type:
      { name: string; url: string }) => type.name).sort();
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    selectItem: (state: RootState, action: { payload: number }) => {
      state.selectedItem = state.items.data.find(item =>
        item.id === action.payload);
    },
    unselectItem: (state: RootState, action: { payload: number }) => {
      if (state?.selectedItem?.id === action.payload) {
        state.selectedItem = null;
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchItems.pending, (state) => {
      state.items.status = "loading";
    }),
      builder.addCase(fetchItems.fulfilled, (state: RootState, action) => {
        state.items.status = "success";
        state.items.data = [
          ...state.items.data,
          ...action.payload.items as ItemType[]
        ];
        state.totalCount = action.payload.totalCount;
        state.items.error = null;
      }),
      builder.addCase(fetchItems.rejected, (state, action) => {
        state.items.status = "failed";
        state.items.error = action?.error.message;
      }),
      builder.addCase(fetchTypes.pending, (state) => {
        state.types.status = "loading";
      }),
      builder.addCase(fetchTypes.fulfilled, (state: RootState, { payload }) => {
        state.types.status = "success";
        state.types.data = payload;
        state.types.error = null;
      }),
      builder.addCase(fetchTypes.rejected, (state, action) => {
        state.types.status = "failed";
        state.types.error = action?.error.message;
      })
  }
});

export const { selectItem, unselectItem } = itemsSlice.actions;
export default itemsSlice.reducer;
export { fetchItems, fetchTypes };
