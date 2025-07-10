"use client";

import Link from "next/link";
import { MdOutlineHome, MdOutlineEmail } from "react-icons/md";
import { FaRegUser, FaRegFolderOpen } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

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
    };

    return (
        <nav className="flex items-center justify-between max-w-3xl mx-auto mt-6 py-2 px-3 text-white">
            <h1 className="logo">MouadMounib</h1>
            <ul className="flex space-x-4 list-none">
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
            <Link href="/contact" className=" flex items-center gap-1 px-4 py-2 bg-primary rounded-full text-sm hover:bg-accent">
                <MdOutlineEmail size={17} />
                Contact Me
            </Link>
        </nav>
    )
}