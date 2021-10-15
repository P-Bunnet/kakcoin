import React from "react";
import "./Coin.css";
import { Link } from "react-router-dom";

const Coin = ({
  id,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}: {
  id: string;
  name: string;
  price: number;
  symbol: string;
  marketcap: number;
  volume: number;
  image: string;
  priceChange: number | undefined;
}) => {


  return (
    <Link to={"/coin/" + id} className="table coin-container">
      <div className="col-span-1 flex justify-start">
        <img src={image} alt="crypto" />
      </div>
      <div className="col-span-1 flex justify-start">{name}</div>
      <div className="col-span-2 uppercase flex justify-start">{symbol}</div>

      <div className="col-span-2 flex justify-start">${price}</div>
      <div className="col-span-2 flex justify-start">
        ${Number(volume).toLocaleString()}
      </div>
      <div className="col-span-2 flex justify-start">
        {priceChange === undefined ? (
          <td>Null</td>
        ) : priceChange > 0 ? (
          <p className="text-green-600 w-1/6">{priceChange.toFixed(2)}%</p>
        ) : (
          <p className="text-red-600 w-1/6">{priceChange.toFixed(2)}%</p>
        )}
      </div>
      <div className="col-span-2 flex justify-start">
        ${Number(marketcap).toLocaleString()}
      </div>
    </Link>
  );
};

export default Coin;
