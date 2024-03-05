import {center} from "maath/buffer";
import Footer from "../components/Footer";
import React from "react";

function About({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return(
        <div>
            <section id={'about'} style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: textcolor,
            }}>
                <div style={{display: "flex"}}>
                    <h1>
                        <br/>
                        ABOUT
                    </h1>
                </div>
                <section style={{
                    backgroundColor: lightMode ? "#eeeffe" : "black",
                    color: textcolor,
                }}>
                    <h1>
                        I'm a developer studying at the Georgia Institute of Technology
                    </h1>
                    <div style={{
                        paddingLeft:"10%"
                    }}>
                        <img src={"./assets/profile.JPG"} style={{
                            width: "25%", borderRadius: "50%"
                        }}/>
                    </div>
                </section>
                <br/>
            </section>
        </div>

    )
}

export default About