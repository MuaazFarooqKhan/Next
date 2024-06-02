import { TabGroup } from '../../../ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <div className="space-y-8">
        <TabGroup
          path="/parallel-routes"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Demographics',
              slug: 'demographics',
            },
            {
              text: 'Subscribers',
              slug: 'subscribers',
            },
          ]}
        />

        {children}
      </div>
  );
}
