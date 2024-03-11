import ProjectList from "../components/projectList";
function Projects({lightMode}) {
    let textcolor = lightMode? "black":"white"
    return(
        <section className={"component"} id={'projects'} style={{
            width: "100vw",
            minHeight:"90vh",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: textcolor, paddingLeft:"2%", paddingRight:"2%"
        }}>
            <h1>
                PROJECTS
            </h1>
            <ProjectList lightMode={lightMode}/>
        </section>
    )
}
export default Projects