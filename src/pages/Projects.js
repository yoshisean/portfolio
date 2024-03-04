function Projects({lightMode}) {

    return(
        <section className={"component"} id={'projects'} style={{
            height: "100vh", width: "100vw",
            backgroundColor: lightMode ? "#eeeffe" : "black",
            color: "hotpink"
        }}>
            <h1>
                <br/>
                My Projects
            </h1>
        </section>
    )
}
export default Projects