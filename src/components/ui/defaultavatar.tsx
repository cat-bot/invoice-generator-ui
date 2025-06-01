function DefaultAvatar(){
    return (
        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer overflow-hidden bg-gray-100 hover:scale-120 transition duration-150 ease-in-out">
            <svg className="absolute w-10 h-10 md:w-12 md:h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>                    
        </div>
    );
}

export default DefaultAvatar;