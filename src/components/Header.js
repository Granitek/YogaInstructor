import React, { useState } from 'react'

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const closeNav = () => {
        setIsNavOpen(false);
    };
    return (
        <header>
            <div className="container">
                <div className="logo">Anna Kowalska</div>
                <div className="nav-toggle" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className={isNavOpen ? 'active' : ''}>
                    <ul>
                        <li><a href="#home" onClick={closeNav}>Home</a></li>
                        <li><a href="#about" onClick={closeNav}>O mnie</a></li>
                        <li><a href="#classes" onClick={closeNav}>Zajęcia</a></li>
                        <li><a href="#contact" onClick={closeNav}>Kontakt</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
