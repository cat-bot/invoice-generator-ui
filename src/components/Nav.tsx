import './Nav.css'

function Nav() {

  return (
    <>
      <header className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a className="font-mono text-2xl px-4 py-3 rounded-full text-teal-400 hover:text-white hover:bg-teal-400 duration-150" aria-label="Invoicy | Home" title="Invoicy | Home" href="#">$_</a>
              <div className="hidden md:flex md:gap-x-6">
                <a className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="#features">Features</a>
              </div>
            </div>
            <div className="flex items-center gap-x-5 md:gap-x-8">
              <div className="hidden md:block">
                <a className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900" href="/login">Sign in</a>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav
