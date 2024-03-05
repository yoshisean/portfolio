import {center} from "maath/buffer";

function About({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return(
        <section className={"component"} id={'about'} style={{
            height: "100vh", width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: textcolor
        }}>
            <div style={{display:"flex"}}>
                <h1>
                    <br/>
                    About Page
                </h1>
            </div>

        </section>
    )
}

export default About