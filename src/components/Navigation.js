// src/components/Navigation.js
import Link from 'next/link';

const Navigation = () => (
  <nav>
    <Link href="/home">Home</Link>
    <Link href="/about">About</Link>
  </nav>
);

export default Navigation;
