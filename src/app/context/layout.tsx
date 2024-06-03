import { getCategories } from '../../app/categories/getCategories';
import { Boundary } from '../../ui/boundary';
import { TabGroup } from '../../ui/tab-group';
import { CounterProvider } from '../context/counter-context';
import React from 'react';
import ContextClickCounter from './context-click-counter';

const title = 'Client Context';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  return (
        <CounterProvider>
          <Boundary
            labels={['useContext Component Boundary']}
            size="small"
            animateRerendering={false}
          >
            <div className="space-y-9">
              <div className="flex justify-between">
                <TabGroup
                  path="/context"
                  items={[
                    {
                      text: 'Home',
                    },
                    ...categories.map((x) => ({
                      text: x.name,
                      slug: x.slug,
                    })),
                  ]}
                />
              </div>

              <ContextClickCounter />
              <div>{children}</div>
            </div>
          </Boundary>
        </CounterProvider>
  );
}
