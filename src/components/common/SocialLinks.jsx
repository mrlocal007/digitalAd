import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

const socials = [
    {
        name: "LinkedIn",
        href: "#", // Replace with your LinkedIn URL
        icon: FaLinkedinIn,
        bg: "hover:bg-[#0A66C2]",
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/share/1BgkaL2RwK/",
        icon: FaFacebookF,
        bg: "hover:bg-[#1877F2]",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/ad_media_global",
        icon: FaInstagram,
        bg: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-500",
    },
    {
        name: "YouTube",
        href: "#", // Replace with your YouTube URL
        icon: FaYoutube,
        bg: "hover:bg-[#FF0000]",
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/919817048962",
        icon: FaWhatsapp,
        bg: "hover:bg-[#25D366]",
    },
];

export default function SocialLinks({
    showLabel = false,
    size = "md",
}) {

    const sizes = {
        sm: "w-10 h-10 text-base",
        md: "w-12 h-12 text-lg",
        lg: "w-14 h-14 text-xl",
    };

    return (

        <div className="flex flex-wrap gap-4">

            {socials.map((item) => {

                const Icon = item.icon;

                return (

                    <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className={`
                            group
                            inline-flex
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            border
                            border-slate-200
                            bg-white
                            text-slate-600                        
                            px-4
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-transparent
                            hover:text-white
                            hover:shadow-xl
                            ${showLabel ? "pr-5" : ""}
                            ${item.bg}
                        `}
                    >

                        <span
                            className={`
                                flex
                                items-center
                                justify-center
                                rounded-full
                                ${sizes[size]}
                            `}
                        >
                            <Icon />
                        </span>

                        {showLabel && (
                            <span className="font-medium">
                                {item.name}
                            </span>
                        )}

                    </a>

                );

            })}

        </div>

    );

}