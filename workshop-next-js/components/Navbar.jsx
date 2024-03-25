import Link from 'next/link'


const Navbar = () => {
    const links = [
      { href: '/about', label: 'about' },
      { href: '/contact', label: 'contact' },
    ];
  
    return (
      <nav>
        <div>
          <h1>NextJS Workshop</h1>
        </div>
        <ul>
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