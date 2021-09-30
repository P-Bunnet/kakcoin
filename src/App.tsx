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
    <div className='text-gray-600  bg-blue-100 '>
      
      <div>
        {/* <h1 className="kakcoin">KAKCoin</h1> */}
        <div>
        <nav className="bg-red-400 px-4 p-4 md:bg-blue-600 text-white">
          <div className="flex items-center justify-between">

            <div className="flex items-center">
              <div>
                <p>KAKCOIN</p>
              </div>

            <div className='pl-5'>
                <a href="" className='pr-4'>Home</a>
                <a href=""  className='pr-4'>About</a>
                <a href=""  className='pr-4'>Contact</a>
            </div>
        </div>
        <div>
          <img src="../popcat.gif" alt="logo" className='rounded-full flex items-center justify-center'/>
        </div>
        <div>
            <a href="" className='pr-4'>Log in</a>
            <a href="" className='pr-4'>Sign up</a>
        </div>

    </div>
</nav>
        </div> 
        {/* // end nav */}


        <div className='text-center pt-6 pb-6'>
          <h2 className='coin-text'>Search a currency</h2>
        <form>
          <input
            className='border-2 border-black'
            type='text'
            onChange={handleChange}
            placeholder='Search'
          />
        </form>
        </div>
        
        
      </div>
      <div>
      <table className='table=fixed min-w-full'>
          <th className='w-4/12'>Coin</th>
          <th className="w-1/8">Price</th>
          <th className="w-1/8">24h Volume</th>
          <th className="w-1/8">24H Changes</th>
          <th className="w-1/8">Market Cap</th>
        </table>
      </div>
      <div>
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
      
    </div>
  );
}

export default App;
