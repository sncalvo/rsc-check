'use client'
import { useState } from "react";

export const ClientComponent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Client Component</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  )
}
