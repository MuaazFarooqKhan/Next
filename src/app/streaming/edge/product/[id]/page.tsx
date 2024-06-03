import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '../../../_components/recommended-products';
import { Reviews, ReviewsSkeleton } from '../../../_components/reviews';
import { SingleProduct } from '../../..//_components/single-product';
import { Ping } from '../../../../../ui/ping';
import { Suspense } from 'react';

export const runtime = 'experimental-edge';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14 px-4 lg:px-0">
      <SingleProduct
        data={fetch(
          `https://app-playground-api.vercel.app/api/products?id=${params.id}`,
        )}
      />

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts
          path="/streaming/edge/product"
          data={fetch(
            `https://app-playground-api.vercel.app/api/products?delay=500&filter=${params.id}`,
            {
              cache: 'no-store',
            },
          )}
        />
      </Suspense>

      <div className="relative">
        <div className="absolute -left-4 top-2">
          <Ping />
        </div>
      </div>

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews
          data={fetch(
            `https://app-playground-api.vercel.app/api/reviews?delay=1000`,
            {
              cache: 'no-store',
            },
          )}
        />
      </Suspense>
    </div>
  );
}
