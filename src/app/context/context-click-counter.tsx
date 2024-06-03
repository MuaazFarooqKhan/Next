'use client';

import { useCounter } from './counter-context';
import React from 'react';
import { Boundary } from '../../ui/boundary';


const ContextClickCounter = () => {
  const [count, setCount] = useCounter();

  return (
      <button
        onClick={() => setCount(count + 1)}
        className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
      >
        {count} Clicks
      </button>
  );
};

export const Counter = () => {
  const [count] = useCounter();

  return (
      <div className="span text-xl font-bold text-white">
        <span className="tabular-nums">{count}</span> Clicks
      </div>
  );
};

export default ContextClickCounter;
