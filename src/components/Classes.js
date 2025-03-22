import React from 'react'

export default function Classes() {
    return (
        <section id="classes" className="classes">
            <div className="container">
                <h2>Zajęcia</h2>
                <div className="classes-grid">
                    <div className="class-card">
                        <h3>Joga dla początkujących</h3>
                        <p>Idealne wprowadzenie do praktyki jogi. Poznaj podstawowe pozycje i techniki oddychania.</p>
                        <ul>
                            <li>Poniedziałek, 18:00-19:30</li>
                            <li>Środa, 9:00-10:30</li>
                        </ul>
                    </div>
                    <div className="class-card">
                        <h3>Hatha Joga</h3>
                        <p>Tradycyjna forma jogi, skupiająca się na prawidłowym ustawieniu ciała i spokojnym oddechu.</p>
                        <ul>
                            <li>Wtorek, 17:00-18:30</li>
                            <li>Czwartek, 19:00-20:30</li>
                        </ul>
                    </div>
                    <div className="class-card">
                        <h3>Vinyasa Flow</h3>
                        <p>Dynamiczna forma jogi, łącząca płynne przejścia między pozycjami z oddechem.</p>
                        <ul>
                            <li>Poniedziałek, 20:00-21:30</li>
                            <li>Piątek, 18:00-19:30</li>
                        </ul>
                    </div>
                    <div className="class-card">
                        <h3>Joga Relaksacyjna</h3>
                        <p>Spokojne zajęcia, idealne na koniec dnia. Skupiamy się na redukcji stresu i głębokim relaksie.</p>
                        <ul>
                            <li>Środa, 20:00-21:15</li>
                            <li>Niedziela, 17:00-18:15</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
