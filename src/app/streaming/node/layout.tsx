import { Boundary } from '../../../ui/boundary';
import { cookies } from 'next/headers';
import React from 'react';
import { CartCountProvider } from '../_components/cart-count-context';
import { Header } from '../_components/header';

export const metadata = {
  title: 'Streaming (Node Runtime)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const cartCount = Number(cookies().get('_cart_count')?.value || '0');

  return (
    <div className="space-y-8 lg:space-y-14 lg:flex lg:flex-col lg:h-screen">
      <Boundary animateRerendering={false} labels={['Demo']} size="small">
        <CartCountProvider initialCartCount={cartCount}>
          <Header />
          <div className="flex-grow">{children}</div>
        </CartCountProvider>
      </Boundary>
    </div>
  );
}
