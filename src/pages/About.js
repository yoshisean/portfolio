import {center} from "maath/buffer";
import Footer from "../components/Footer";
import React from "react";

function About({lightMode}) {
    let textcolor = lightMode? "black":"white"
    return(
        <div>
            <section id={'about'} style={{
                maxWidth: "100vw",
                width:"fit-content",
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: textcolor,
            }}>
                <section style={{
                    backgroundColor: lightMode ? "#eeeffe" : "black",
                    color: textcolor, paddingLeft:"2%", paddingRight:"2%"
                }}>
                    <h1 style={{
                        paddingTop:"20px"
                    }}>
                        ABOUT<br/>
                        <div style={{
                        }}>
                            Developer and Designer.
                        </div>
                    </h1>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        verticalAlign: "middle"
                    }}>
                        <p>
                            Hey there, Sean here. I'm currently a student at the Georgia Institute
                            of Technology but originally based in Chicago, IL. I'm pursuing a CS degree with
                            concentrations in AI/ML application development and math. These don't exactly scream
                            "creative" or "user friendly", but I've been enjoying working on difficult problems
                            that require a good understanding of algorithm and system design. Outside of classes,
                            I love building unique products (especially websites!) that prioritize ease of use.
                            <br/><br/>
                            I've been coding since my freshman year of high school, and since then I've gained
                            a significant amount of experience in software development. Over the summer I had a
                            chance to work on a startup along with a few friends. Although it didn't work out, I learned
                            a ton about the business side of client interactions and finding product market fit. I definitely
                            want to try again with a different startup in the future.
                            <br/><br/>
                            When I'm not designing you can find me with my cello, in the climbing gym, or watching YouTube.
                            Hope you found my website interesting, because I had a lot of fun building it. -Sean
                        </p>
                        <img src={"./assets/profile.JPG"} style={{
                            width: "30vw", height: "30vw", objectFit: "cover"
                        }} alt={"profile"}/>
                    </div>
                </section>
                <br/>
            </section>
        </div>

    )
}

export default About