import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { ItemType } from '../types/types';

import { LIMIT } from '../constants';

export type RootState = {
  items: ItemType[],
  status: 'loading' | 'pending' | 'success' | 'failed',
  error: null | string | undefined,
  totalCount: number,
  selectedItem: ItemType | null | undefined,
}

const initialState: RootState = {
  items: [],
  status: "loading",
  error: null,
  totalCount: 0,
  selectedItem: null,
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

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    selectItem: (state: RootState, action: { payload: number }) => {
      state.selectedItem = state.items.find(item =>
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
      state.status = "loading";
    }),
      builder.addCase(fetchItems.fulfilled, (state: RootState, action) => {
        state.status = "success";
        state.items = [...state.items, ...action.payload.items as ItemType[]];
        state.totalCount = action.payload.totalCount;
        state.error = null;
      }),
      builder.addCase(fetchItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action?.error.message;
      })
  }
});

export const { selectItem, unselectItem } = itemsSlice.actions;
export default itemsSlice.reducer;
export { fetchItems };
