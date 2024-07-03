// src/components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => (
  <aside>
    <Link href="/home">Home</Link>
    <Link href="/people">People</Link>
    <Link href="/settings">Settings</Link>
  </aside>
);

export default Sidebar;

