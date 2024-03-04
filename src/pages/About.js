import {center} from "maath/buffer";

function About({lightMode}) {
    return(
        <section className={"component"} id={'about'} style={{
            height: "100vh", width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: "hotpink"
        }}>
            <div style={{display:"flex", justifyContent: "center",alignItems:"center"}}>
                <h1>
                    <br/>
                    About Page
                </h1>
            </div>

        </section>
    )
}

export default About