import { getCategory } from '../../../../app/categories/getCategories';
import { Boundary } from '../../../../ui/boundary';
import { Counter } from '../../context-click-counter';

export default async function Page({
  params,
}: {
  params: { categorySlug: string; subCategorySlug: string };
}) {
  const category = await getCategory({ slug: params.subCategorySlug });

  return (
    <div className="space-y-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-400/80">
        {category.name}
      </h1>

      <div className="sm:w-3/4 md:w-1/2 lg:w-1/3">
        <Counter />
      </div>
    </div>
  );
}
