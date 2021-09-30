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
      <div className='coin-container '>
          <table className='table-fixed'>
            <tr className='w-full'>
              <td className='w-4/12'>
                <tr>
                <td className='pl-5'>
                  <img src={image} alt='crypto' />
                  </td>
                <td className='font-bold pl-5'>{name}</td>
                <td className='coin-symbol uppercase pl-5'>{symbol}</td>
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
            
          </table>
      </div>
    );
  };

export default Coin
