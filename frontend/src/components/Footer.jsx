import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white text-black py-4 mt-auto w-full">
            <div className="mx-[8vw]">
                {/* Główna sekcja footer */}
                <div className="flex items-center justify-between  border-b border-gray-200 pb-4">
                    {/* Tekst po lewej */}
                    <p className="text-[0.7vw]">&copy; 2025 GLOW&SAVOR CREATIONS</p>

                    {/* Linki na środku */}
                    <div className="flex gap-[6vw] text-[1.5vw] mx-auto">
                        <Link to="https://instagram.com" target="_blank" className="hover:text-blue-400">Instagram</Link>
                        <Link to="/about" className="hover:text-blue-400">O Mnie</Link>
                        <Link to="/contact" className="hover:text-blue-400">Kontakt</Link>
                    </div>

                    {/* Logo po prawej */}
                    <div className="text-[2vw] font-bold">LOGO</div>
                </div>

                {/* Dolna sekcja z nawigacją */}
                <div className="flex justify-center gap-[15vw] text-[1.5vw]  border-gray-200 pt-4">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/blog" className="hover:text-blue-400">Blog</Link>
                    <Link to="/about" className="hover:text-blue-400">O Mnie</Link>
                    <Link to="/contact" className="hover:text-blue-400">Kontakt</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;