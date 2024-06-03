import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '../../../_components/recommended-products';
import { Reviews, ReviewsSkeleton } from '../../../_components/reviews';
import { SingleProduct } from '../../../_components/single-product';
import { Ping } from '../../../../../ui/ping';
import { Suspense } from 'react';

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14 lg:flex lg:space-x-10">
      <div className="lg:w-1/2">
        <SingleProduct
          data={fetch(
            `https://app-playground-api.vercel.app/api/products?id=${params.id}`,
          )}
        />
        <div className="relative lg:hidden">
          <div className="absolute -left-4 top-2">
            <Ping />
          </div>
        </div>
      </div>

      <div className="lg:w-1/2">
        <div className="hidden lg:block">
          <div className="relative">
            <div className="absolute -left-4 top-2">
              <Ping />
            </div>
          </div>
        </div>
        <Suspense fallback={<RecommendedProductsSkeleton />}>
          <RecommendedProducts
            path="/streaming/node/product"
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
    </div>
  );
}
