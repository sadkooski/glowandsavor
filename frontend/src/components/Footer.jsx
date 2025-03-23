import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white  pb-[5vw] pt-[5vw] mt-[3vw] w-full">
            <div className="mx-[8vw]">
                {/* Główna sekcja footer */}
                <div className="flex items-center justify-between border-b-1 border-black pb-[3vw]">
                    {/* Tekst po lewej */}
                    <p className="text-[0.6vw]">&copy; 2025 GLOW&SAVOR CREATIONS</p>

                    {/* Linki na środku */}
                    <div className="flex gap-[6vw] text-[1.2vw] mx-auto">
                        <Link to="https://instagram.com" target="_blank" className="hover:text-blue-400 pr-[12vw]">
                        <img src="assets/icons/instagram.svg" alt="Instagram" className="w-[2vw] hover:opacity-70 hover:fill-blue-400" />
                        </Link>
                    </div>

                    {/* Logo po prawej */}
                    <Link to="/" className="hover:text-blue-400 w-[12vw] absolute left-[81vw]">
                    <img className="" src="/assets/icons/6.png " alt="" />
                    </Link>
                </div>

                {/* Dolna sekcja z nawigacją */}
                <div className="flex justify-center gap-[15vw] text-[1.5vw]  pt-[1.5vw] font-[Didonesque]">
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