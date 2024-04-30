import React from "react";

const SectionShortening = () => {
    return (
        <section className="shortening">
            <form className="shortening-inputs">
                <div className="link-input">
                    <input type="url" name="url" id="url" placeholder="Shorten a link here..."></input>
                    <p className="input-error">Please add a link</p>
                </div>
                <input type="submit" value="Shorten It!"></input>
            </form>
        </section>
    )
}

export default SectionShortening