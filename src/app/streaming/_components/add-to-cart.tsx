"use client"
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { useCartCount } from './cart-count-context';
import ErrorMessage from '../../../ui/ErrorMessage'; // Import custom error message component

export function AddToCart({ initialCartCount }: { initialCartCount: number }) {
  const router = useRouter();
  const [isPendingAdd, startTransitionAdd] = useTransition();
  const [isPendingRemove, startTransitionRemove] = useTransition();
  const [, setOptimisticCartCount] = useCartCount();
  const [error, setError] = useState(false);


  const addToCart = () => {
    setError(false)
    setOptimisticCartCount(initialCartCount + 1);
    document.cookie = `_cart_count=${initialCartCount + 1}; path=/; max-age=${60 * 60 * 24 * 30}};`;
    startTransitionAdd(() => {
      setOptimisticCartCount(null);
      router.refresh();
    });
  };

  const removeFromCart = () => {
    if (initialCartCount > 0) {
      setOptimisticCartCount(initialCartCount - 1);

      document.cookie = `_cart_count=${initialCartCount - 1}; path=/; max-age=${60 * 60 * 24 * 30}};`;
      startTransitionRemove(() => {
        setOptimisticCartCount(null);
        router.refresh();
      });
    } else {
      setError(true)
    }
  };

  return (
    <>
      <button
        className="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1 text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
        onClick={addToCart}
        disabled={isPendingAdd}
      >
        Add to Cart
        {isPendingAdd && (
          <div className="absolute right-2 top-1.5" role="status">
            <div className="h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </button>
      <button
        className="relative w-full items-center space-x-2 rounded-lg bg-vercel-blue px-3 py-1 text-sm font-medium text-white hover:bg-vercel-blue/90 disabled:text-white/70"
        onClick={removeFromCart}
        disabled={isPendingRemove}
      >
        Remove from Cart
        {isPendingRemove && (
          <div className="absolute right-2 top-1.5" role="status">
            <div className="h-4 w-4 animate-spin rounded-full border-[3px] border-white border-r-transparent" />
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </button>
{error &&
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline">There is no data in the cart</span>
    </div>}
    </>
  );
}
