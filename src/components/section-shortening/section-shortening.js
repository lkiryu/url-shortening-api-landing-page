import React from "react";

import './section-shortening.css'

const SectionShortening = () => {
    return (
        <section className="shortening">
            <form className="shortening-inputs">
                <div className="link-input">
                    <input type="url" name="url" id="url" className="url" placeholder="Shorten a link here..."></input>
                    <p className="input-error none">Please add a link</p>
                </div>
                <input type="submit" className="submit" value="Shorten It!"></input>
            </form>
        </section>
    )
}

export default SectionShortening