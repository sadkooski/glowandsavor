import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-white shadow-md w-full">
            <div className="mx-auto flex justify-between items-center">
                {/* Logo po lewej stronie */}
                <Link to="/" className="text-2xl font-bold text-blue-600">
                MojaStrona
                </Link>

                {/* Nawigacja po prawej stronie */}
                <nav>
                <ul className="flex space-x-6">
                    <li>
                    <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
                    </li>
                    <li>
                    <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
                    </li>
                    <li>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600">O Mnie</Link>
                    </li>
                    <li>
                    <Link to="/contact" className="text-gray-700 hover:text-blue-600">Kontakt</Link>
                    </li>
                </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;