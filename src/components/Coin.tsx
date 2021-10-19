import React from "react";
import "./Coin.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Coin = ()=>{
  const coins = useSelector((state:RootState) => state.allCoins.coins);
  const renderList = coins.map((coin)=>{
    const {id,name,image,symbol,current_price,total_volume,price_change_percentage_24h,market_cap}:{id:string;name:string;image:string;symbol:string;current_price:number;total_volume:number;price_change_percentage_24h:number;market_cap:number} = coin;
    return (
    <Link to={"/coin/" + id} className="table coin-container">
      <div className="col-span-1 flex justify-start">
        <img src={image} alt="crypto" />
      </div>
      <div className="col-span-1 flex justify-start">{name}</div>
      <div className="col-span-2 uppercase flex justify-start">{symbol}</div>

      <div className="col-span-2 flex justify-start">${current_price}</div>
      <div className="col-span-2 flex justify-start">
        {Number(total_volume).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
      <div className="col-span-2 flex justify-start">
        {price_change_percentage_24h === undefined ? (
          <td>Null</td>
        ) : price_change_percentage_24h > 0 ? (
          <p className="text-green-600 w-1/6">{price_change_percentage_24h.toFixed(2)}%</p>
        ) : (
          <p className="text-red-600 w-1/6">{price_change_percentage_24h.toFixed(2)}%</p>
        )}
      </div>
      <div className="col-span-2 flex justify-start">
        {Number(market_cap).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </div>
    </Link>
  );
  })
  return <>{renderList}</>
};

export default Coin;
