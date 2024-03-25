import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1 className="text-4xl font-bold">Hello World</h1>

    <Link href="/about">
    <button className='bg-blue-400 p-2 rounded-lg'>
      To About</button>  
    </Link>

    </main>
  );
}