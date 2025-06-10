import DefaultAvatar from "./defaultavatar";

function Avatar({ src, title } : { src?: string, title?: string }) {

    title = title || "";

    if (!src) {
        return <DefaultAvatar />;
    }

    return (
        <div className="flex relative w-8 h-8 md:w-10 md:h-10 rounded-full cursor-pointer overflow-hidden bg-gray-100 hover:scale-120 transition duration-150 ease-in-out">
            <img className="object-cover" src={ src } title={ title }  />
        </div>
    );
}

export default Avatar;