import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-6 left-6 z-50">
            <Link href="/" className="group">
                <div className="relative">
                    <Image
                        src="/myImage.jpg"
                        alt="Piyush Rathore"
                        width={40}
                        height={40}
                        className="rounded-full border border-white/20 hover:border-white/40 transition-colors duration-300"
                        loading="lazy"
                    />
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-black/20" />
                </div>
            </Link>
        </nav>
    );
};

export default Navbar;
