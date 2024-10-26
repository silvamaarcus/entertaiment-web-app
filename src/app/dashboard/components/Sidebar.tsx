import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li>
            <Link href="/dashboard/home">Home</Link>
          </li>
          <li>
            <Link href="/dashboard/bookmark">Bookmark</Link>
          </li>
          {/* Outros links se necessário */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
