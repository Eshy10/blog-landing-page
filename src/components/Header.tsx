import Link from 'next/link';

export default function Header() {
  return (
    <div className="m-8 text-blue-400">
      <h1>
        <Link href="/">Home</Link>
      </h1>
    </div>
  );
}
