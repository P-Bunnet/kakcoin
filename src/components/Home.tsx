import React, { useState, useEffect } from "react";
import Coin from "./Coin";
import { CurrencyData } from "./DataInterface";
import axios from "axios";
import { setCoins } from "../redux/actions/coinActions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Home = ({ sendDataToParent }) => {
  // const [coins, setCoins] = useState<CurrencyData[]>([]);
  const [search, setSearch] = useState("");
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     axios
  //       .get<CurrencyData[]>(
  //         "https://lit-earth-60289.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  //       )
  //       .then((res) => {
  //         setCoins(res.data);
  //         // console.log(res.data);
  //       })
  //       .catch((error) => console.log(error));
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  const coin = useSelector((state:RootState) => state.allCoins.coins);
  const dispatch = useDispatch();
  const fetchCoins = async () => {
    try {
      const resp = await axios.get<CurrencyData[]>(
        "https://lit-earth-60289.herokuapp.com/https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      // console.log(resp.data);
      dispatch(setCoins(resp.data));
      
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
  };
  useEffect(() => {
    fetchCoins();
  }, []);

  //
  const handleChange = (e: any) => {
    setSearch(e.target.value);
  };
  // const filteredCoins = coins.filter((coin) =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );
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
        <Coin/>
      </div>
    </div>
  );
};

export default Home;
