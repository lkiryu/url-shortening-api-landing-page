import React from "react";
import illustrationWorking from '../../images/illustration-working.svg'

import './hero.css'

const SectionHero = () => {
    return (
        <section className="hero">
            <div className="info">
                <h1 className="title">More than just shorter links</h1>
                <p className="description">Build your brand’s recognition and get detailed insights
                    on how your links are performing.</p>
                <a href="/">Get Started</a>
            </div>
            <img src={illustrationWorking} alt="illustration working"></img>
        </section>
    )
}

export default SectionHero