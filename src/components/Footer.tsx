import { Heart } from "lucide-react";

export default function Footer() {
    return (
        <footer>
            <div className="w-full max-w-4xl mx-auto px-4 h-24 max-md:h-32">
                <div className="bg-neutral-900 flex items-start pt-3 justify-between px-5 mx-1 h-24 max-md:h-32 rounded-lg text-neutral-500 text-sm ">
                    <div className="hover:text-neutral-400">Portfolio</div>
                    <div className="hover:text-neutral-400 flex items-center gap-1">
                        made with <Heart className="w-3 h-3 text-red-500" />
                    </div>
                </div>
            </div>
        </footer>
    );
}
