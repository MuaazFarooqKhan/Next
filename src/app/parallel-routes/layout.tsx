import Link from "next/link";

export default function Layout({
  audience,
}: {
  audience: React.ReactNode;
}) {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <div className="ml-6 flex items-center space-x-6">
              <div className="space-y-6">
                {audience}
              </div>
              <Link href="/">
                <span className="text-blue-500 hover:underline">Back</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>


  );
}
