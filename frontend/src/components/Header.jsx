import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`w-full px-[8vw] flex flex-col ${isHome ? "bg-[url('/assets/header-bg.jpeg')] bg-cover bg-center h-[100vh]" : "bg-white"}`}>
            <div className="mx-auto w-full flex justify-between items-center py-[8vw] text-[1.5vw]">
                <Link to="/" className=" font-bold text-black">MojaStrona</Link>
                <nav>
                    <ul className="flex gap-[6vw]">
                        <li>
                            <Link to="/" className="text-black hover:text-blue-400">Home</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="text-black hover:text-blue-400">Blog</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-black hover:text-blue-400">O Mnie</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-black hover:text-blue-400">Kontakt</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            {/* Nowa sekcja pod nawigacją - tylko na stronie głównej */}
            {isHome && (
                <div className="w-full flex flex-col items-center justify-center mt-auto pb-[3vw] gap-[1vw]">
                    <h2 className="text-[4vw] font-bold text-center">Lorem Ipsum</h2>
                    <div className="w-full border-b border-black my-2"></div>
                    <p className="text-[2vw] text-center">Lorem ipsum dolor sit amet.</p>
                </div>
            )}
        </header>
    );
};

export default Header;
