import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <main class="h-screen w-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            <img src="avatar150.png" />
            <div className="relative flex items-center justify-center mt-10 mb-10">
                <h1 class="text-9xl font-extrabold text-white text-center tracking-wide leading-[2.2rem]">404</h1>
                <div class="bg-cyan-500 px-2 text-xl rounded text-black font-bold rotate-6 absolute bottom-[-35px]">
                    Page Not Found
                </div>
            </div>
            <button class="">
                <a
                    class="relative inline-block text-sm font-medium text-white/80 group active:text-orange-500 focus:outline-none focus:ring"
                >
                    <span
                        class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-cyan-400group-hover:translate-y-0 group-hover:translate-x-0"
                    ></span>

                    <span class="relative block px-8 py-3 backdrop-blur-2xl bg-white/10 hover:bg-cyan-400/20 hover:text-cyan-400 border border-current rounded-2xl">
                        <Link to="/">Go Home</Link>
                    </span>
                </a>
            </button>
        </main >
    )
}