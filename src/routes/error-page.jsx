import { Link, useRouteError } from "react-router-dom";


export default function ErrorPage() {
    const error = useRouteError()
    console.error(error)
    return (
        <main className="h-screen w-screen flex flex-col justify-center items-center overflow-hidden bg-black">
            <img src="avatar150.png" />
            <div className="relative flex items-center justify-center mt-10 mb-10">
                <h1 className="text-9xl font-extrabold text-white text-center tracking-wide leading-[2.2rem]">404</h1>
                <div className="bg-cyan-500 px-2 text-xl rounded text-black font-bold rotate-6 absolute bottom-[-35px]">
                    Page Not Found
                </div>
            </div>
            <Link to="/" className="relative block text-sm font-medium text-white/80 group active:text-cyan-400 focus:outline-none focus:ring px-8 py-3 backdrop-blur-2xl bg-white/10 hover:bg-cyan-400/20 hover:text-cyan-400 border border-current rounded-2xl">
                Go Home
            </Link>
        </main >
    )
}