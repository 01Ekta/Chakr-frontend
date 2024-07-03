// src/components/Sidebar.js
import Link from 'next/link';

const Sidebar = () => (
  <aside>
    <Link href="/settings">Settings</Link>
    <Link href="/profile">Profile</Link>
  </aside>
);

export default Sidebar;