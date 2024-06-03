import { getCategory } from '../../../app/categories/getCategories';
import { Counter } from '../context-click-counter';

export default async function Page({
  params,
}: {
  params: { categorySlug: string };
}) {
  const category = await getCategory({ slug: params.categorySlug });

  return (
    <div className="space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400/80">
        All {category.name}
      </h1>
      
      <div className="sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Counter />
      </div>
    </div>
  );
}
