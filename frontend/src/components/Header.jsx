import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`w-full px-[8vw] flex flex-col ${isHome ? "bg-[url('/assets/header-bg.jpeg')] bg-cover bg-center h-[100vh]" : "bg-white"}`}>
            <div className="mx-auto w-full flex justify-between items-center py-[8vw] text-[1.2vw]">
                <Link to="/" className=" font-bold">MojaStrona</Link>
                <nav>
                    <ul className="flex gap-[6vw]">
                        <li>
                            <Link to="/" className=" hover:text-blue-400">HOME</Link>
                        </li>
                        <li>
                            <Link to="/blog" className=" hover:text-blue-400">BLOG</Link>
                        </li>
                        <li>
                            <Link to="/about" className=" hover:text-blue-400">ABOUT ME</Link>
                        </li>
                        <li>
                            <Link to="/contact" className=" hover:text-blue-400">CONTACT</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Nowa sekcja pod nawigacją - tylko na stronie głównej */}
            {isHome && (
                <div className="w-full flex flex-col items-center justify-center mt-auto pb-[3vw] gap-[1vw]">
                    <h2 className="text-[4vw] font-bold text-center">Lorem Ipsum</h2>
                    <div className="w-full border-b-[0.1vw] border-black my-[1vw]"></div>
                    <p className="text-[2vw] text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            )}
        </header>
    );
};

export default Header;
