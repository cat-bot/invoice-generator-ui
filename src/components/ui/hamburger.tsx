import './hamburger.css';
import { Dispatch, SetStateAction } from 'react';

function Hamburger({ toggled, toggle, }: { toggled: boolean; toggle: Dispatch<SetStateAction<boolean>>; }) {

    const handleToggle = () => {
        toggle(!toggled);
    };
    
  return (
    <div>
        <button className={`${toggled ? 'is-active' : ''} relative z-10 flex h-8 w-10 items-center justify-center focus:not-data-focus:outline-hidden`} 
            onClick={handleToggle}
            aria-label="Toggle Navigation" 
            type="button" >
            <svg className={`${toggled ? '' : 'hidden'} h-3.5 w-3.5 overflow-visible stroke-slate-700`} fill="none" stroke-width="2" stroke-linecap="round">
                <path d="M0 1H14M0 7H14M0 13H14" className="origin-center transition"></path>
                <path d="M2 2L12 12M12 2L2 12" className="origin-center transition scale-90 opacity-0"></path>
            </svg>
            <svg className={`${toggled ? 'hidden' : ''} overflow-visible stroke-slate-700`} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f">
                <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
        </button>
    </div>
  );
}

export default Hamburger;