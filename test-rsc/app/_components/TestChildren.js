'use client'

import React, { useState } from 'react';

import { NonBinaryComponent } from './NonBinaryComponent';

export function TestChildren({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>

      <NonBinaryComponent />

      <div>
        {children}
      </div>
    </div>
  );
}
