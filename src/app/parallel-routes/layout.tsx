import Link from "next/link";
import React from "react";

export default function Layout({
  audience,
}: {
  audience: React.ReactNode;
}) {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row justify-between items-center h-full">
          <div className="flex items-center lg:flex-grow">
            <div className="flex flex-col space-y-4">
              {React.Children.map(audience, (child) => (
                <div className="space-y-6">{child}</div>
              ))}
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <Link href="/">
              <span className="text-blue-500 hover:underline">Back</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
