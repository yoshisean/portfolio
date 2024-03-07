import {center} from "maath/buffer";
import Footer from "../components/Footer";
import React from "react";

function About({lightMode}) {
    let textcolor = lightMode? "black":"white"
    return(
        <div>
            <section id={'about'} style={{
                width: "100vw",
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: textcolor,
            }}>
                <section style={{
                    backgroundColor: lightMode ? "#eeeffe" : "black",
                    color: textcolor, paddingLeft:"5%", paddingRight:"5%"
                }}>
                    <h1>
                        ABOUT<br/>
                        <div style={{
                        }}>
                            Developer and Designer.
                        </div>
                    </h1>
                    <div style={{
                        display:"inline-block",
                        justifyContent: "space-evenly",
                        verticalAlign: "middle"
                    }}>
                        <img src={"./assets/profile.JPG"} className={"blob"} style={{
                            width: "25%", height: "25%", objectFit: "cover"
                        }} alt={"profile"}/>
                        <p>
                            Hey there, Sean here. I'm passionate about creating responsive and intuitive products.
                            I'm currently a CS student at the Georgia Institute of Technology but originally based in Chicago, IL.
                            When I'm not designing you can find me with my cello, in the climbing gym, or watching YouTube.
                        </p>
                    </div>
                </section>
                <br/>
            </section>
        </div>

    )
}

export default About