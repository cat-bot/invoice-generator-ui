import { Link } from 'react-router';
import { useState } from 'react';
import './hamburger.css';

function Hamburger({ sidebarLinks }: { sidebarLinks: { name: string; href: string }[] }) {

  const [ isChecked, setIsChecked ] = useState(false);

  const handleNavClick = () => {
    setIsChecked(!isChecked);
  }

  return (
    <>
        <label className="hamburger-menu flex flex-col gap-(--hamburger-gap)">
            <input type="checkbox" checked={isChecked} onChange={handleNavClick}/>
            
        </label>
        <aside className="hamburger-sidebar">
            <nav className="flex flex-col gap-2 text-right text-bold">
                { sidebarLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={handleNavClick}
                  >
                    {link.name}
                  </Link>
                ))}
            </nav>
        </aside>
    </>
  );
}

export default Hamburger;