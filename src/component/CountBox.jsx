import React from 'react'
import counterStore from '../stores/counterStore'

const CountBox = () => {
    const {count, expressionFlag, beforeCount} = counterStore();
  return (
    <h2 className='fontDigit colorWhite'>{expressionFlag? beforeCount: Number(count) % 1 !== 0
          ? Number(count).toFixed(2)
          : Number(count) > 9999999999
            ? 'MAX'
            : String(count)}</h2>
  )
}

export default CountBox