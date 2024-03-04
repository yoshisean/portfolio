import Hero from "./Hero";

function Home({lightMode}) {
    return(
        <div>
            <Hero lightMode={lightMode}/>
            <section className={"component"} style={{
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: "hotpink"
            }}>
                About Me
            </section>
        </div>
    )
}
export default Home