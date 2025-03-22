import React, { useState } from 'react'

export default function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };
    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2>Kontakt</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Informacje kontaktowe</h3>
                        <p><strong>Adres:</strong> ul. Spokojna 15, 00-000 Warszawa</p>
                        <p><strong>Telefon:</strong> +48 123 456 789</p>
                        <p><strong>Email:</strong> anna@jogaharmonia.pl</p>
                        <h3>Godziny otwarcia</h3>
                        <p>Poniedziałek - Piątek: 9:00 - 21:00</p>
                        <p>Sobota - Niedziela: 10:00 - 18:00</p>
                    </div>
                    <div className="contact-form">
                        <h3>Wyślij wiadomość</h3>
                        {isSubmitted ? (
                            <div className="success-message">Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.</div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Imię i nazwisko</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Wiadomość</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn">Wyślij</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}
