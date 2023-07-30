import { useState } from 'react';
import classes from './Counter.module.scss';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <div className={classes.wrapper}>
        <h1 className="title">Hello World!</h1>
      </div>
      <button onClick={increment}>increment</button>
    </div>
  )
}
