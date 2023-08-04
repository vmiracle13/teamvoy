import { ItemType } from '../types/types';

type ActionTypes = 'loadMore';

const reducer = (state: { items: ItemType[] },
  action: { type: ActionTypes, payload: ItemType[] }) => {
  switch (action.type) {
    case 'loadMore': {
      return {
        items: [...state.items, ...action.payload],
      };
    }

    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

export default reducer;
