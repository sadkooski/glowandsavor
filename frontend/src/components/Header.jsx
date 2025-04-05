import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/home";

    return (
        <header className={`w-full px-[8vw] flex flex-col ${isHome ? "bg-cover bg-center h-[100vh] bg-animation" : "bg-white"}`}>
            <div className={`mx-auto w-full flex justify-center md:justify-between items-center md:py-[8vw] text-[1vw] ${isHome ? "border-b-1 border-black md:border-b-0 md:border-transparent" : "border-b-0 border-transparent"}`}>
                <Link to="/" className=" font-bold">
                    <img className="w-50 md:w-[12vw] md:absolute md:top-[3vw]" src="/glowandsavor/assets/icons/5.png" alt="" />
                </Link>
                <nav className="hidden md:flex">
                    <ul className="flex gap-[5vw]">
                        <li>
                            <Link to="/" className=" hover:text-blue-400">HOME</Link>
                        </li>
                        <li>
                            <Link to="/blog" className=" hover:text-blue-400">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/ebook" className=" hover:text-blue-400">EBOOK</Link>
                        </li>
                        <li>
                            <Link to="/about" className=" hover:text-blue-400">O MNIE</Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" hover:text-blue-400">KONTAKT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Nowa sekcja pod nawigacją - tylko na stronie głównej */}
            {isHome && (
                <div className="w-full flex flex-col text-left md:text-center gap-1 md:gap-0 justify-center md:mt-auto">
                    <h2 className="text-3xl leading-snug md:leading-none pt-15 md:text-[2.5vw] font-bold md:mb-[3vw]">Ebook z koktajlami z kolagenem jest już dostępny</h2>
                    <p className="md:hidden text-base pb-30">Twoje źródło inspiracji dla zdrowia i piękna od wewnątrz</p>
                    <div className="w-full border-b-1 border-black"></div>
                    <p className="hidden md:flex text-[1vw] text-center my-[2vw] justify-center">Twoje źródło inspiracji dla zdrowia i piękna od wewnątrz</p>
                </div>
            )}
        </header>
    );
};

export default Header;
