import DefaultAvatar from "./defaultavatar";

function Avatar({ src, alt } : { src: string, alt?: string }) {

    alt = alt || "";

    console.log("Avatar component rendered with src:", src, "and alt:", alt);
    
    if (!src) {
        return <DefaultAvatar />;
    }

    return (
        <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer overflow-hidden bg-gray-100 hover:scale-120 transition duration-150 ease-in-out">
            <img src={src} alt={ alt }  />
        </div>
    );
}

export default Avatar;