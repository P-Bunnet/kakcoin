import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './components/Coin';
import { CurrencyData } from './components/DataInterface';


function App() {
  const [coins,setCoins] = useState<CurrencyData[]>([]);
  const [search,setSearch] = useState('')

  useEffect(()=>{
    axios.get<CurrencyData[]>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res=> {
        setCoins(res.data);
        console.log(res.data);
  })
      .catch(error=> console.log(error));
  },[]);
  
  //
  const handleChange = (e:any) => {
    setSearch(e.target.value);
  }
  const filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='coin-app'>
      <div className='coin-search'>
        {/* <h1 className="kakcoin">KAKCoin</h1> */}
        <h2 className='coin-text'>Search a currency</h2>
        <form>
          <input
            className='coin-input'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        <div className="table-name"></div>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}
    </div>
  );
}

export default App;
