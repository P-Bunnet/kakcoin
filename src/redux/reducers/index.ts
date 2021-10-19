import { combineReducers } from "redux";
import { coinsReducer,selectedCoinsReducer,selectedCoinPriceReducer } from "./coinReducer";
const reducers = combineReducers({
  allCoins: coinsReducer,
  coin: selectedCoinsReducer,
  coinPrice: selectedCoinPriceReducer,
});
export default reducers;