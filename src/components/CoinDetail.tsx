import React, {useEffect,useState} from 'react'
import './CoinDetail.css'
import axios from 'axios'
import { url } from 'inspector'

const CoinDetail = ({match}) => {
    const [coinDetail, SetCoinDetail] = useState([])
    const c_id = match.params.id;
    const Url: string = `https://api.coingecko.com/api/v3/coins/${c_id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false`;
    useEffect(()=>{
        const interval = setInterval(() => {
          axios.get(Url)
          .then(res=> 
            {SetCoinDetail(res.data);
             console.log(res.data);
            }).catch(error=> console.log(error));
        }, 10000);
          return () => clearInterval(interval);
      },[]);

    return (
        <div >
            <div className="min-h-screen bg-gray-200 flex justify-center items-center ">
                <div className="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg grid grid-cols-2">
                    <div id="header" className="flex items-center mb-4 col-span-2 grid grid-cols-2"> 
                        <div>
                            <img alt="avatar" className="w-20 h-20 border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
                            <div id="header-text" className="leading-5 ml-2 sm">
                                <h4 id="name" className="text-xl font-semibold">{c_id}</h4>
                                <h5 id="job" className="font-semibold text-blue-600">{c_id}</h5>
                            </div>
                            </div>
                        <div>
                            <h1>Price:</h1>
                            <h1>24H Change:</h1>
                        </div>
                    </div>
                    <div id="quote">
                       
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default CoinDetail
