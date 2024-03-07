function Projects({lightMode}) {
    let textcolor = lightMode? "black":"white"
    return(
        <section className={"component"} id={'projects'} style={{
            width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: textcolor, paddingLeft:"2%", paddingRight:"2%"
        }}>
            <h1>
                PROJECTS
            </h1>
        </section>
    )
}
export default Projects