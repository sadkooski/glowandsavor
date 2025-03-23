import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`w-full px-[8vw] flex flex-col ${isHome ? "bg-[url('/assets/img-18.jpg')] bg-cover bg-center h-[100vh]" : "bg-white"}`}>
            <div className="mx-auto w-full flex border-b-1 border-black justify-center md:justify-between items-center md:py-[8vw] text-[1vw]">
                <Link to="/" className=" font-bold">
                <img className="w-50 md:w-[12vw] md:absolute md:top-[3vw]" src="/assets/icons/5.png" alt="" />
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
                <div className="w-full flex flex-col text-left md:text-center gap-1 md:gap-0 justify-center md:mt-auto pb-[2vw]">
                    <h2 className="text-3xl leading-[7vw] pt-15 md:text-[2.5vw] font-bold">Lorem Ipsum asdasd dasd asdasd asdasdasdsdsdasdas</h2>
                    <p className="md:hidden text-base pb-30">Lorem ipsum dolor sit amet dsd sd asd asd sdsd sdasd as.</p>
                    <div className="w-full border-b-1 border-black md:my-[2vw]"></div>
                    <p className="hidden md:flex text-[1vw] text-center my-[1vw] justify-center">Lorem ipsum dolor sit amet.</p>
                </div>
            )}
        </header>
    );
};

export default Header;
