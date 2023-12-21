import { Link } from "react-router-dom";

export default function ComingSoon() {
    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center  overflow-hidden bg-black">
            <img src="avatar150.png" />
            <div className="relative flex items-center justify-center mt-4 mb-10">
                <h1 className="text-7xl font-extrabold text-white text-center tracking-wide leading-[2.2rem]">Coming soon</h1>
                <div className="bg-yellow-500 px-2 text-xl rounded text-black font-bold rotate-6 absolute bottom-[-35px]">
                    Work in progress
                </div>
            </div>
            <Link className="relative block text-sm font-medium text-white/80 group active:text-yellow-400 focus:outline-none focus:ring px-8 py-3 backdrop-blur-2xl bg-white/10 hover:bg-yellow-500/20 hover:text-yellow-500  border border-current rounded-2xl">
                Go Home
            </Link>
        </main >
    )
}