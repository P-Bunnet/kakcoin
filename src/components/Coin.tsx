import React from 'react'
import './Coin.css'


const Coin = ({
    name,
    price,
    symbol,
    marketcap,
    volume,
    image,
    priceChange
  }:{name:string,
    price:number,
    symbol:string,
    marketcap:number,
    volume:number,
    image:string,
    priceChange:number|undefined}) => {
    return (
      <div className='table coin-container'>
          {/* <table className='table-fixed'>
            <tr className='w-full'>
              <td className='w-4/12'>
                <tr>
                <td className='pl-5'>
                  <img src={image} alt='crypto' />
                  </td>
                <td className='font-bold pl-5'>{name}</td>
                <td className='uppercase pl-5'>{symbol}</td>
                </tr>
                
                </td>
              
              <td className='w-1/6'>${price}</td>
              <td className='w-1/6'>${volume.toLocaleString()}</td>
              {priceChange === undefined ? <td>Null</td>:
              priceChange>0 ? 
              <td className='text-green-600 w-1/6'>{priceChange.toFixed(2)}%</td>:
              <td className='text-red-600 w-1/6'>{priceChange.toFixed(2)}%</td>}
              <td className='w-1/6'>
                ${marketcap.toLocaleString()}
              </td>
            </tr>
            
          </table> */}
            <div className='col-span-1 flex justify-start'><img src={image} alt='crypto' /></div>
            <div className='col-span-1 flex justify-start'>{name}</div>
            <div className='col-span-2 uppercase flex justify-start'>{symbol}</div>
          
          <div className='col-span-2 flex justify-start'>${price}</div>
          <div className='col-span-2 flex justify-start'>${volume.toLocaleString()}</div>
          <div className='col-span-2 flex justify-start'>{priceChange === undefined ? <td>Null</td>:
              priceChange>0 ? 
              <p className='text-green-600 w-1/6'>{priceChange.toFixed(2)}%</p>:
              <p className='text-red-600 w-1/6'>{priceChange.toFixed(2)}%</p>}
              </div>
            <div className='col-span-2 flex justify-start'>${marketcap.toLocaleString()}</div>

      </div>
    );
  };

export default Coin
