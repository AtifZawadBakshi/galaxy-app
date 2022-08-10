export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

export const DLT = (id) => {
  return {
    type: "RMV_CART",
    payload: id,
  };
};

export const REMOVE = (item) => {
  return {
    type: "RMV_ITEM",
    payload: item,
  };
};
export const ADD_WISHLIST = (item) => {
  return {
    type: "ADD_WISH",
    payload: item,
  };
};

export const DLT_WISHLIST = (id) => {
  return {
    type: "DLT_WISH",
    payload: id,
  };
};

export const RMV_WISHLIST = (item) => {
  return {
    type: "RMV_WISH",
    payload: item,
  };
};
