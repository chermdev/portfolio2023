import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function NewPortfolioMessage() {
  return (
    <div className="relative flex flex-col sm:flex-row justify-center items-center bg-gradient-to-br from-blue-600  to-purple-600  text-white shadow-lg text-center p-4 overflow-hidden">
      <p className="absolute -translate-x-10 sm:-translate-x-40 z-[2] scale-125 font-bold mr-0 sm:mr-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-500/60 to-purple-500/60 text-5xl text-nowrap">
        Coming soon
      </p>
      <p className="absolute translate-x-[10rem] sm:translate-x-[5rem] z-[1] scale-[2] font-bold mr-0 sm:mr-2 text-transparent bg-clip-text bg-gradient-to-br from-blue-700/60 to-purple-700/60 text-5xl text-nowrap">
        Coming soon
      </p>
      <div className="z-[3]">
        <p className="inline-block text-balance font-medium">
          <span className="font-semibold">Coming soon</span>
          <br />
          New 2025 portfolio under development from scratch with
          <span>
            <a
              href="https://astro.build/"
              className="inline-block underline ml-2 underline-offset-2 hover:underline-offset-4 transition-all"
            >
              🚀 Astro
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <NewPortfolioMessage />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
