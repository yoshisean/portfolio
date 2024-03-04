import Hero from "./Hero";

function Home({lightMode}) {
    return(
        <div>
            <Hero lightMode={lightMode}/>
            <section className={"component"} style={{
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: "hotpink"
            }}>
                <h1>
                    I'm a developer focused on creating <br/>
                    responsive and intuitive designs
                </h1>
            </section>
        </div>
    )
}
export default Home