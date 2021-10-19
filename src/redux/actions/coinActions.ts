import { ActionTypes } from "../constants/actionType";

export const setCoins = (coins) => {
  return {
    type: ActionTypes.SET_COINS,
    payload: coins,
  };
};

export const selectedCoin = (coin) => {
  return {
    type: ActionTypes.SELECTED_COIN,
    payload: coin,
  };
};
export const selectedCoinPrice = (coin) => {
  return {
    type: ActionTypes.SELECTED_COIN_PRICE,
    payload: coin,
  };
};
export const removeSelectedCoin = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COIN,
  };
};
export const removeSelectedCoinPrice = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_COIN_PRICE,
  };
};
