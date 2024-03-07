function Projects({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return(
        <section className={"component"} id={'projects'} style={{
            width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: textcolor
        }}>
            <h1>
                PROJECTS
            </h1>
        </section>
    )
}
export default Projects