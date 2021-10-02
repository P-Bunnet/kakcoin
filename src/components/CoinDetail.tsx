import React from 'react'

const CoinDetail = ({match}) => {
    return (
        <div className='Detail-container'>
            {match.params.id}
        </div>
    )
}

export default CoinDetail
