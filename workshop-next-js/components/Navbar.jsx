import Link from 'next/link'


const Navbar = () => {
    const links = [
      { href: '/about', label: 'about' },
      { href: '/contact', label: 'contact' },
      { href: '/budings', label: 'budings' },
    ];
  
    return (
      <nav className='container mx-auto px-6  py-8 flex justify-between'>
        <Link href={'/'}>
          <h1 className='text-2xl font-bold bg-blue-300'>NextJS</h1>
        </Link>
        <ul className='flex gap-4 text-sm'>
          {links.map((link) => {
            return (<li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
             </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  
  export default Navbar;