import { Link } from "react-router";
// import { useState } from "react";
import Hamburger from "@/components/ui/hamburger";

function Nav() {

  // const [isHamburgerOpen, setHamburgerOpen] = useState(false);

  const navLinks = [
    { name: "Sign in", href: "/auth/signin" },
    { name: "Register", href: "/auth/register" }
  ];

  return (
    <>
      <header className="py-3 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <Link to="/" className="font-mono text-2xl px-3 md:px-4 py-3 rounded-full text-teal-400 hover:text-white hover:bg-teal-400 duration-150">_$_</Link>

              <div className="hidden md:flex md:gap-x-6">
                <a
                  className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#features"
                >
                  Features
                </a>
              </div>
             
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden sm:block">
                { navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 bg hover:bg-slate-100 hover:text-slate-900"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="sm:hidden mr-2">
                <Hamburger sidebarLinks={navLinks} />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav
