"use client";

import Link from "next/link";
import { MdOutlineHome, MdOutlineEmail, MdMenu, MdClose } from "react-icons/md";
import { FaRegUser, FaRegFolderOpen } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "projects"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Check initial position

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getNavItemClasses = (section: string) => {
        const baseClasses = "flex items-center gap-1 border rounded-full p-1 px-3 transition-all duration-200";
        if (activeSection === section) {
            return `${baseClasses} border-primary text-accent font-semibold bg-primary/30`;
        }
        return `${baseClasses} border-transparent text-white/70 hover:text-white hover:border-white/20`;
    };

    const handleNavClick = (section: string) => {
        setActiveSection(section);
        setIsMobileMenuOpen(false); // Close mobile menu on navigation
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex items-center justify-between mx-auto mt-6 py-1 px-3 text-white relative max-w-3xl md:max-w-3xl z-50 pointer-events-auto">
            <h1 className="logo">MM.</h1>
            
            {/* Desktop Navigation */}
            <ul className="hidden md:flex space-x-4 list-none">
                <li>
                    <Link 
                        href="#home" 
                        className={getNavItemClasses("home")}
                        onClick={() => handleNavClick("home")}
                    >
                        <MdOutlineHome size={20}/> Home
                    </Link>
                </li>
                <li>
                    <Link 
                        href="#about" 
                        className={getNavItemClasses("about")}
                        onClick={() => handleNavClick("about")}
                    >
                        <FaRegUser size={13}/>
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        href="#projects" 
                        className={getNavItemClasses("projects")}
                        onClick={() => handleNavClick("projects")}
                    >
                        <FaRegFolderOpen size={20}/>
                        Projects
                    </Link>
                </li>
            </ul>

            {/* Desktop Contact Button */}
            <Link href="/contact" className="hidden md:flex items-center gap-1 px-4 py-2 bg-primary rounded-full text-sm hover:bg-accent">
                <MdOutlineEmail size={17} />
                Contact Me
            </Link>

            {/* Mobile Hamburger Menu */}
            <button 
                className="md:hidden p-2 text-white hover:text-accent transition-colors"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? <MdClose size={30} /> : <MdMenu size={30} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <>
                    <div 
                        className="fixed inset-0 w-full z-40 md:hidden"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="fixed top-0 right-0 h-full w-96 bg-black border-l border-muted/20 z-50 md:hidden">
                        <div className="flex flex-col p-6 space-y-6">
                            <div className="flex items-center justify-between mb-6">
                                <button 
                                    onClick={toggleMobileMenu}
                                    className="p-1 text-white hover:text-accent"
                                >
                                    <MdClose size={20} />
                                </button>
                            </div>
                            
                            <Link 
                                href="#home" 
                                className={`${getNavItemClasses("home")} w-full justify-start`}
                                onClick={() => handleNavClick("home")}
                            >
                                <MdOutlineHome size={20}/> Home
                            </Link>
                            
                            <Link 
                                href="#about" 
                                className={`${getNavItemClasses("about")} w-full justify-start`}
                                onClick={() => handleNavClick("about")}
                            >
                                <FaRegUser size={13}/>
                                About
                            </Link>
                            
                            <Link 
                                href="#projects" 
                                className={`${getNavItemClasses("projects")} w-full justify-start`}
                                onClick={() => handleNavClick("projects")}
                            >
                                <FaRegFolderOpen size={20}/>
                                Projects
                            </Link>

                            <div className="pt-4 border-t border-muted/20">
                                <Link 
                                    href="/contact" 
                                    className="flex items-center gap-2 px-4 py-3 bg-primary rounded-full text-sm hover:bg-accent w-full justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <MdOutlineEmail size={17} />
                                    Contact Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </nav>
    )
}