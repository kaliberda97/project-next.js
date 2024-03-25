'use client';

import {useState} from 'react'

const ClientCounter = () => {
    const [count, setCount] = useState(0)

    const handleIncreaseCount = () => {
        setCount(count + 1);
    }

 console.log('hello');


  return (
   <>
        <h1>Client Counter{count}</h1>
        <button onClick={handleIncreaseCount}>increase</button>
  </>
  );
};



export default ClientCounter;