export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const demos: { name: string; items: Item[] }[] = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Parallel Routes',
        slug: 'parallel-routes',
        description: 'Render multiple pages in the same layout',
      },
    ],
  },

  {
    name: 'Components',
    items: [
      {
        name: 'useContext hook',
        slug: 'context',
        description:
          'State management',
      },
    ],
  },
  {
    name: 'Dashboard',
    items: [
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description:
          'Fetch and display data',
      }
    ],
  },
];
