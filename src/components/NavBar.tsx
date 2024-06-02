// components/NavBar.tsx

import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li className="nav-item">
          <Link href="/admin/section1">
            <span className="text-white hover:text-gray-300">Section 1</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/admin/section2">
            <span className="text-white hover:text-gray-300">Section 2</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
