import React, { useEffect, useState } from "react";
import "./CoinDetail.css";
import axios from "axios";
import { CoinDetails,description, coinImg } from "./DataInterface";
import filteredCoins from "./Home";

const CoinDetail = ({ match }) => {
  const [coinDetail, SetCoinDetail] = useState<CoinDetails[]>([]);
  const [coinDes, SetDes] = useState<description[]>([]);
  const [coinImg, SetImg] = useState<coinImg[]>([]);
  const c_id = match.params.id;
  const clog= match.params.id;
  
  console.log(clog);
  
  const Url: string = `https://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/${c_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get<CoinDetails[]>(Url)
        .then((res) => {
          SetCoinDetail(res.data);
          SetDes(res.data['description']);
          SetImg(res.data['image'])
        })
        .catch((error) => console.log(error));
    }, 500);
    return () => clearInterval(interval);
  }, [coinDetail]);

  
  return (
    <div>
      <div className="min-h-screen bg-gray-200 flex justify-center items-center p-6 ">
        <div className=" bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg grid grid-cols-2">
          <div
            id="header"
            className=" items-center mb-4 col-span-2 grid grid-cols-2"
          >
            <div className='flex justify-start'>
              <img
                alt="avatar"
                className="w-20 h-20 "
                src={coinImg['large']}
              />
              <div id="header-text" className="leading-5 ml-2 sm flex justify-start self-center">
                <h4 id="name" className="font-semibold pr-2 text-2xl">
                  {coinDetail['name']}
                </h4>
                <h5 id="job" className=" text-2xl font-semibold uppercase">
                ({coinDetail['symbol']})
                </h5>
              </div>
            </div>
            <div>
              <h1 className='text-xl font-bold'>Price:</h1>
              <h1 className='text-xl font-bold'>24H Change:</h1>
            </div>
          </div>
          <div className='col-span-2 pb-4'>
            <h1 className='text-2xl font-bold'>Description:</h1>
          </div>
          <div className='col-span-2'>
            {coinDes['en']}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinDetail;
