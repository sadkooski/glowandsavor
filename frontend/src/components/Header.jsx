import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        <header className={`w-full px-[10vw] ${isHome ? "bg-[url('/assets/header-bg.jpg')] bg-cover bg-center h-[100vh]" : "bg-white"}`}>
            <div className="mx-auto flex justify-between items-center  py-4">
                <Link to="/" className="text-2xl font-bold text-black">MojaStrona</Link>

                <nav>
                    <ul className="flex gap-[8vw]">
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
        </header>
    );
};

export default Header;