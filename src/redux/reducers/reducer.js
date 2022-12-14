const INIT_STATE = {
  carts: [],
};
const INIT_STATE_WISH = {
  wishlist: [],
};
const INIT_STATE_COMPARE = {
  comparelist: [],
};
export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }

    case "RMV_CART":
      const data = state.carts.filter((c) => c.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "RMV_ITEM":
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const dltitem = (state.carts[ItemIndex_dec].qnty -= 1);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: data,
        };
      }
    default:
      return state;
  }
};

export const wishlistreducer = (state = INIT_STATE_WISH, action) => {
  switch (action.type) {
    case "ADD_WISH":
      const ItemIndex = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.wishlist[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          wishlist: [...state.wishlist, temp],
        };
      }

    case "DLT_WISH":
      const data = state.wishlist.filter((c) => c.id !== action.payload);
      return {
        ...state,
        wishlist: data,
      };

    case "RMV_WISH":
      const ItemIndex_dec = state.wishlist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.wishlist[ItemIndex_dec].qnty >= 1) {
        const dltitem = (state.wishlist[ItemIndex_dec].qnty -= 1);

        return {
          ...state,
          wishlist: [...state.wishlist],
        };
      } else if (state.wishlist[ItemIndex_dec].qnty === 1) {
        const data = state.wishlist.filter((el) => el.id !== action.payload);
        return {
          ...state,
          wishlist: data,
        };
      }
    default:
      return state;
  }
};

export const comparereducer = (state = INIT_STATE_COMPARE, action) => {
  switch (action.type) {
    case "ADD_COMP":
      const ItemIndex = state.comparelist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (ItemIndex >= 0) {
        state.comparelist[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          comparelist: [...state.comparelist, temp],
        };
      }

    case "DLT_COMP":
      const data = state.comparelist.filter((c) => c.id !== action.payload);
      return {
        ...state,
        comparelist: data,
      };

    case "RMV_COMP":
      const ItemIndex_dec = state.comparelist.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.comparelist[ItemIndex_dec].qnty >= 1) {
        const dltitem = (state.comparelist[ItemIndex_dec].qnty -= 1);

        return {
          ...state,
          comparelist: [...state.comparelist],
        };
      } else if (state.comparelist[ItemIndex_dec].qnty === 1) {
        const data = state.comparelist.filter((el) => el.id !== action.payload);
        return {
          ...state,
          comparelist: data,
        };
      }
    default:
      return state;
  }
};
