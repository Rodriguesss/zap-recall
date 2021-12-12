import { useState } from 'react'

export default function ZapItem({ message, color, setTrigger, setDataIndex, value,
  count, setCount }) {

  function checkZap() {
    console.log('count: ', count)
    console.log('value: ', value)

    setTrigger('zap', color)
    addCount()
    showLoser()
  }

  function addCount() {
    color === 'yellow'
      && setCount(count + 1); (value - 1) === count && setDataIndex(1)
  }

  function showLoser() {
    count >= value && setDataIndex(1)
  }

  return (
    <div className={`zap-item border ${color}`} onClick={checkZap}>
      <p>{message}</p>
    </ div>
  )
}