import React from "react";
import brandRecognition from "../../images/icon-brand-recognition.svg"
import detailedRecords from "../../images/icon-detailed-records.svg"
import fullyCustomizable from "../../images/icon-fully-customizable.svg"

const SectionAdvanced = () => {
    return (
        <section className="Advanced">
            <h2 className="title">Advanced Statistics</h2>
            <p className="description">Track how your links are performing across the web with our
                advanced statistics dashboard.</p>
            <div className="cards">
                <div className="card">
                    <img src={brandRecognition} alt="Brand Recognition"></img>
                    <h3 className="card-title">Brand Recognition</h3>
                    <p className="card-description">Boost your brand recognition with each click. Generic links don’t
                        mean a thing. Branded links help instil confidence in your content.</p>
                </div>
                <div className="card">
                    <img src={detailedRecords} alt="Detailed Records"></img>
                    <h3 className="card-title">Detailed Records</h3>
                    <p className="card-description">Gain insights into who is clicking your links. Knowing when and where
                        people engage with your content helps inform better decisions.</p>
                </div>
                <div className="card">
                    <img src={fullyCustomizable} alt="Fully Customizable"></img>
                    <h3 className="card-title">Fully Customizable</h3>
                    <p className="card-description">Improve brand awareness and content discoverability through customizable
                        links, supercharging audience engagement.</p>
                </div>
            </div>
        </section>
    )
}

export default SectionAdvanced