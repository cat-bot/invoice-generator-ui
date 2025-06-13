import { NavLink } from 'react-router';
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
        <aside className="hamburger-sidebar opacity-95 rounded-l-lg">
            <nav className="flex flex-col text-right text-base text-bold">
                { sidebarLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.href}
                    onClick={handleNavClick}
                    className="py-2 px-4"
                  >
                    {link.name}
                  </NavLink>
                ))}
            </nav>
        </aside>
    </>
  );
}

export default Hamburger;