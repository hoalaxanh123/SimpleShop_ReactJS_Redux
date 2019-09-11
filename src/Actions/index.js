import * as types from "./../Constants/ActionTypes";

export const LIST_GETALL = () => {
  return {
    type: types.LIST_GETALL
  };
};
export const addToCart = product => {
  return {
    type: types.ADD_TO_CART,
    product
  };
};
export const delete_Product_Cart = product_id => {
  return {
    type: types.DELETE_TO_CART,
    product_id
  };
};
