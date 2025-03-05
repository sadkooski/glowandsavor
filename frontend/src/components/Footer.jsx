import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-center py-4 mt-auto w-full">
            <p>&copy; 2025 MojaStrona. Wszelkie prawa zastrzeżone.</p>
            <div className="mt-2 flex justify-center space-x-4">
                <Link to="https://instagram.com" target="_blank" className="mx-2 hover:text-blue-400">Instagram</Link>
                <Link to="/about" className="mx-2 hover:text-blue-400">O Mnie</Link>
                <Link to="/contact" className="mx-2 hover:text-blue-400">Kontakt</Link>
            </div>
        </footer>
    );
};

export default Footer;