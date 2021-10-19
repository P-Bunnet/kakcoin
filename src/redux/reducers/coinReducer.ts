import { ActionTypes } from "../constants/actionType";
const intialState = {
  coins: [],
};

export const coinsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_COINS:
      return { ...state, coins: payload };
    default:
      return state;
  }
};

export const selectedCoinsReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_COIN:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_COIN:
      return {};
    default:
      return state;
  }
};
export const selectedCoinPriceReducer = (state = {}, { type, payload }) => {
  console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_COIN_PRICE:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_COIN_PRICE:
      return {};
    default:
      return state;
  }
};