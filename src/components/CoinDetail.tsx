import React, { useEffect, useState } from "react";
import "./CoinDetail.css";
import axios from "axios";
import {
  CoinDetails,
  description,
  coinImg,
  CurrencyData,
  Price,
  PriceDetail,
} from "./DataInterface";
import filteredCoins from "./Home";

const CoinDetail = ({ match }) => {
  const [coinDetail, SetCoinDetail] = useState<CoinDetails[]>([]);
  const [coinDes, SetDes] = useState<description[]>([]);
  const [coinImg, SetImg] = useState<coinImg[]>([]);
  const [Price, setPrice] = useState<Price[]>([]);
  const [PriceDetail, setPriceDetail] = useState<PriceDetail[]>([]);
  const c_id = match.params.id;

  //specific Data of Coin
  // const Url: string = `https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/${c_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
  const Url: string = `https://lit-earth-60289.herokuapp.com/https://api.coingecko.com/api/v3/coins/${c_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get<CoinDetails[]>(Url)
        .then((res) => {
          SetCoinDetail(res.data);
          SetDes(res.data["description"]);
          SetImg(res.data["image"]);
        })
        .catch((error) => console.log(error));
    }, 500);
    return () => clearInterval(interval);
  }, [coinDetail]);

  //CoinPrice
  const PriceUrl: string = `https://lit-earth-60289.herokuapp.com/https://api.coingecko.com/api/v3/simple/price?ids=${c_id}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true`;

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get<Price[]>(PriceUrl)
        .then((res) => {
          setPrice(res.data);
          setPriceDetail(res.data[`${c_id}`]);
          console.log(res.data[`${c_id}`]);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, [Price]);

  return (
    <div>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6 ">
        <div className=" bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg grid grid-cols-2">
          <div
            id="header"
            className=" items-center mb-4 col-span-2 grid grid-cols-2"
          >
            <div className="flex justify-start">
              <img alt="avatar" className="w-20 h-20 " src={coinImg["large"]} />
              <div
                id="header-text"
                className="leading-5 ml-2 sm flex justify-start self-center"
              >
                <h4 id="name" className="font-semibold pr-2 text-2xl">
                  {coinDetail["name"]}
                </h4>
                <h5 id="job" className=" text-2xl font-semibold uppercase">
                  ({coinDetail["symbol"]})
                </h5>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">
                Price: ${PriceDetail["usd"]}
              </h1>
              <h1 className="text-xl font-bold">
                24H Changes:{PriceDetail["usd_24h_change"] === undefined ? (
                  <span>Null</span>
                ) : PriceDetail["usd_24h_change"] > 0 ? (
                  <span className="text-green-600 pl-2">
                    {PriceDetail["usd_24h_change"].toFixed(2)}%
                  </span>
                ) : (
                  <span className="text-red-600 pl-2">
                    {PriceDetail["usd_24h_change"].toFixed(2)}%
                  </span>
                )}
                %
              </h1>

              <h1 className="text-xl font-bold">
                24H Vol: ${PriceDetail["usd_24h_vol"]}
              </h1>
              <h1 className="text-xl font-bold">
                Market Cap: ${PriceDetail["usd_market_cap"]}
              </h1>
            </div>
          </div>
          <div className="col-span-2 pb-4">
            <h1 className="text-2xl font-bold">Description:</h1>
          </div>
          <div className="col-span-2">{coinDes["en"]}</div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
