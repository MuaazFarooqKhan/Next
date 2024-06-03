'use client';

import { useCartCount } from './cart-count-context';

export function CartCount() {
  const [count] = useCartCount();
  return <span className="text-sm md:text-base lg:text-lg xl:text-xl">{count}</span>;
}
