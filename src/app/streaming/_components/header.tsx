import { NextLogoLight } from '../../../ui/next-logo';
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import Image from 'next/image';
import { CartCount } from './cart-count';

export function Header() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-y-3 lg:gap-y-0 gap-x-3 rounded-lg bg-gray-800 px-3 py-3 lg:px-5 lg:py-4">
      <div className="flex gap-x-3 items-center">
        <Link href="/streaming" style={{marginLeft: '80px'}}>
          <div className="h-10 w-10 hover:opacity-70">
            <NextLogoLight />
          </div>
        </Link>

        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-300" />
          </div>
          <input
            aria-label="Search"
            type="search"
            name="search"
            id="search"
            style={{margin:7}}
            className="block w-full rounded-full border-none bg-gray-600 pl-10 font-medium text-gray-200 focus:border-vercel-pink focus:ring-2 focus:ring-vercel-pink"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="flex gap-x-3 items-center">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-white">
          <ShoppingCartIcon className="w-6 text-white" />
          <div className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-300 text-sm font-bold text-cyan-800">
            <CartCount />
          </div>
        </div>

        <Image
          src="/prince-akachi-LWkFHEGpleE-unsplash.jpg"
          className="rounded-full"
          width={40}
          height={40}
          alt="User"
        />
      </div>
    </div>
  );
}
