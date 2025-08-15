import { Link } from "react-router-dom";

interface SocialButtonProps {
    href: string;
    icon: React.ReactNode;
}

export default function SocialLinks({ href, icon } : SocialButtonProps) {
    return (
        <Link to={href} target="_blank" className="bg-secondary p-[8px] rounded-full transition-all duration-300 ease-in-out hover:opacity-80 active:scale-95 text-foreground">
            {icon}
        </Link>
    )
}