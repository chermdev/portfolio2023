import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <main class="h-screen w-screen flex flex-col justify-center items-center  overflow-hidden bg-black">
            <img className="max-w-[150px]" src="avatar.png" />
            <div className="relative flex items-center justify-center">
                <h1 class="text-7xl font-extrabold text-white text-center tracking-wide leading-[8rem]">Coming soon</h1>
                <div class="bg-yellow-500 px-2 text-xl rounded text-black font-bold rotate-6 absolute bottom-1">
                    Work in progress
                </div>
            </div>
            <button class="">
                <a
                    class="relative inline-block text-sm font-medium text-white/80 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-400group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span class="relative block px-8 py-3 backdrop-blur-2xl bg-white/10 hover:bg-yellow-500/20 hover:text-yellow-500  border border-current rounded-2xl">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </main >
    )
}