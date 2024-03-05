function Projects({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return(
        <section className={"component"} id={'projects'} style={{
            height: "100vh", width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: textcolor
        }}>
            <h1>
                <br/>
                PROJECTS
            </h1>
        </section>
    )
}
export default Projects