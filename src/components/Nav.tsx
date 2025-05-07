import './Nav.css'

function Nav() {

  return (
    <>
      <header className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="relative z-50 flex justify-between">
            <div className="flex items-center md:gap-x-12">
              <a
                className="font-mono text-2xl px-4 py-3 rounded-full text-teal-400 hover:text-white hover:bg-teal-400 duration-150"
                aria-label="Invoicy | Home"
                title="Invoicy | Home"
                href="#"
              >
                _$_
              </a>
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
              <div className="hidden md:block">
                <a
                  className="inline-block rounded-full px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                  href="/login">
                  Sign in
                </a>
              </div>
              <div className="-mr-1 md:hidden">
                <div data-headlessui-state="">
                  <button
                    className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
                    aria-label="Toggle Navigation"
                    type="button"
                    aria-expanded="false"
                    data-headlessui-state=""
                    id="headlessui-popover-button-:R5v6fja:"
                  >
                    <svg
                      aria-hidden="true"
                      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                    >
                      <path
                        d="M0 1H14M0 7H14M0 13H14"
                        className="origin-center transition"
                      ></path>
                      <path
                        d="M2 2L12 12M12 2L2 12"
                        className="origin-center transition scale-90 opacity-0"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div style={{
                  position: 'fixed',
                  top: '1px',
                  left: '1px',
                  width: '1px',
                  height: '0',
                  padding: '0',
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0, 0, 0, 0)',
                  whiteSpace: 'nowrap',
                  borderWidth: '0',
                  display: 'none'
                }}></div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Nav
