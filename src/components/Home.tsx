import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import { CurrencyData } from "./DataInterface";
import axios from "axios";

const Home = () => {
  const [coins, setCoins] = useState<CurrencyData[]>([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get<CurrencyData[]>(
          "http://api.allorigins.win/raw?url=https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        )
        .then((res) => {
          setCoins(res.data);
          // console.log(res.data);
        })
        .catch((error) => console.log(error));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  //
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="table pt-5">
        <th className="col-span-4">Coin</th>
        <th className="col-span-2 flex justify-start">Price</th>
        <th className="col-span-2 flex justify-start">24h Volume</th>
        <th className="col-span-2 flex justify-start">24H Changes</th>
        <th className="col-span-2 flex justify-start">Market Cap</th>
      </div>

      <div>
        {filteredCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.market_cap}
              volume={coin.total_supply}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
