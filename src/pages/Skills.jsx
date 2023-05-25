import React from "react";
import "./Skills.css"
import Section from './Section'

function Card() {
    return (
        <div className="card bg-white/10 rounded-xl cursor-pointer h-[260px] relative w-[300px]">
            <div className="card-border"></div>
            <div className="card-content"></div>
        </div>
    )
}

function Skills() {

    const trackMouse = (e) => {
        for (const card of document.getElementsByClassName("card")) {
            const rect = card.getBoundingClientRect(),
                x = e.clientX - rect.left,
                y = e.clientY - rect.top
            card.style.setProperty("--mouse-x", `${x}px`)
            card.style.setProperty("--mouse-y", `${y}px`)
        }
    }

    return (
        <Section id={"skills"}>
            <h2>Skills</h2>
            <div id="cards" className="flex items-center justify-center flex-wrap gap-2" onMouseMove={trackMouse}>
                {[...Array(6)].map((x, i) =>
                    <Card key={i} />
                )}
            </div>
            {/* <div className="flex items-center justify-center h-min p-8 min-h-screen">
      </div> */}
        </Section>
    )
}

export default Skills