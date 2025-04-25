import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import ImageSlider from "./ImageSlider";

const IMAGES = [
    { url: "/assets/bg-2.jpg", alt: "Img One" },
    { url: "/assets/bg-1.jpg", alt: "Img Two" },
    { url: "/assets/bg-3.jpg", alt: "Img Three" },
    { url: "/assets/ebook-1.jpg", alt: "Img Four" },

];

const Header = () => {
    const location = useLocation();
    const isHome = location.pathname === "/";
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

useEffect(() => {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
}, []);

const filteredImages = isMobile
? [IMAGES[0], IMAGES[1], IMAGES[3]]
: [IMAGES[0], IMAGES[1], IMAGES[2]];

    return (
        <header className={`${isHome ? "h-screen z-0" : ""}`}>
            {isHome && <ImageSlider imageUrls={filteredImages} />}
            <div className={`${isHome ? "absolute top-0 justify-between h-full" : ""} w-full px-[8vw] flex flex-col`}>
                <div className={`mx-auto w-full flex justify-center md:justify-between items-center md:py-[8vw] text-[1vw] ${isHome ? " md:border-b-0 md:border-transparent" : "border-b-0 border-transparent"}`}>
                    <Link to="/" className="font-bold">
                        <img className="w-50 md:w-[12vw] md:absolute md:top-[3vw]" src="/assets/icons/5.png" alt="" loading="lazy" />
                    </Link>
                    <nav className="hidden md:flex">
                        <ul className="flex gap-[5vw] text-[1.2vw]">
                            <li><Link to="/" className="hover:text-blue-400">HOME</Link></li>
                            <li><Link to="/blog" className="hover:text-blue-400">BLOG</Link></li>
                            <li><Link to="/ebook" className="hover:text-blue-400">EBOOK</Link></li>
                            <li><Link to="/about" className="hover:text-blue-400">O MNIE</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-400">KONTAKT</Link></li>
                        </ul>
                    </nav>

                    <div className="md:hidden absolute top-18 right-[8vw] z-50">
                        <button onClick={() => setIsMobileMenuOpen(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-black">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {isHome && (
                    <div className="w-full flex flex-col text-left md:text-center gap-1 md:gap-0 justify-center md:mt-auto md:mb-[1vw]">
                        <h2 className="text-3xl leading-snug md:leading-none pt-15 md:text-[2.5vw] font-bold md:mb-[3vw]">
                            Ebook z koktajlami z kolagenem jest już dostępny
                        </h2>
                        <p className="md:hidden text-base pb-10">Twoje źródło inspiracji dla zdrowia i piękna od wewnątrz</p>
                        <div className="w-full md:border-b-1 md:border-black"></div>
                        <p className="hidden md:flex text-[1vw] text-center my-[2vw] justify-center">
                            Twoje źródło inspiracji dla zdrowia i piękna od wewnątrz
                        </p>
                    </div>
                )}
            </div>

            {/* MOBILE MENU: zawsze w DOM, animacja slide-in */}
            <div
                className={`fixed top-0 right-0 w-full h-screen z-50 bg-white/30 backdrop-blur-md flex flex-col items-end gap-[8vh] py-6 px-[8vw] md:hidden transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <button onClick={() => setIsMobileMenuOpen(false)} className="mt-12">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black bg-transparent" fill="none" background="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <nav className="flex flex-col gap-12 text-3xl font-medium w-full items-end font-[Didonesque]">
                    <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
                    <Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link>
                    <Link to="/ebook" onClick={() => setIsMobileMenuOpen(false)}>EBOOK</Link>
                    <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>O MNIE</Link>
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>KONTAKT</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;