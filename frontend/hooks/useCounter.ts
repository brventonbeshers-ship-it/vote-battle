import { useState } from 'react';

export function useCounter(initial = 0, { min = -Infinity, max = Infinity } = {}) {
  const [count, setCount] = useState(initial);
  const inc = () => setCount(c => Math.min(max, c + 1));
  const dec = () => setCount(c => Math.max(min, c - 1));
  const reset = () => setCount(initial);
  return { count, inc, dec, reset, setCount };
}
