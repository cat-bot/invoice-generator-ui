import './Footer.css'

function Footer() {
    return (
      <footer className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-8 text-center text-xl text-slate-500">
            _invoicy_
          </div>
          <div className="flex flex-col items-center border-t border-slate-400/10 py-10">
            <p className="mt-6 text-sm text-slate-500 sm:mt-0 text-center">
              Copyright © Some duder. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
}

export default Footer