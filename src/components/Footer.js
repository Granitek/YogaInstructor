import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">Anna Kowalska - Joga Harmonia</div>
                    <div className="social-links">
                        <a href="https://instagram.com/jogaharmonia" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="https://facebook.com/jogaharmonia" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="https://youtube.com/jogaharmonia" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube"></i> YouTube
                        </a>
                    </div>
                </div>
                <div className="copyright">
                    &copy; {new Date().getFullYear()} Joga Harmonia. Wszelkie prawa zastrzeżone.
                </div>
            </div>
        </footer>
    )
}
