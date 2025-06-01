import { Link } from "react-router";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useIsAuthenticated, useMsal } from '@azure/msal-react';
import Hamburger from "@/components/ui/hamburger";
import Avatar from "./ui/avatar";
import DefaultAvatar from "./ui/defaultavatar";

const Nav = () => {

  const isAuthenticated = useIsAuthenticated();
  const { instance } = useMsal();

  const navLinks = isAuthenticated ? 
  [ 
    { name: "Sign out", href: "/auth/signout" } 
  ] :
  [ 
    { name: "Sign in", href: "/auth/signin" } 
  ];

  const activeAccount = instance.getActiveAccount();

  return (
    <>   
      <header className="py-3 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-4">
              <Link to="/" className="font-mono text-2xl px-4 py-3 rounded-full text-teal-400 hover:text-white hover:bg-teal-400 duration-150">_$_</Link>
              <Link to="/" className="font-mono text-xl md:text-2xl px-2 py-3 overflow-hidden">invoicy</Link>
              <div className="hidden md:flex md:gap-x-6">
                {/* <a
                  className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="#features">
                  Features
                </a> */}
              </div>
            </div>
            <div className="flex items-center gap-x-4 md:gap-x-6">
              <div className="invisible sm:visible">
                { navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <div>
                <AuthenticatedTemplate>
                  <Avatar src={ activeAccount?.username ?? "" } alt= { "what what" } />
                </AuthenticatedTemplate>
                <UnauthenticatedTemplate>
                  <Link to={ "/auth/signin" }>
                    <DefaultAvatar />    
                  </Link>                
                </UnauthenticatedTemplate>                
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
