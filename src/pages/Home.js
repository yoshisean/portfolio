import Hero from "./Hero";

function Home({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return(
        <div>
            <Hero lightMode={lightMode}/>
            <section className={"component"} style={{
                backgroundColor: lightMode ? "#eeeffe" : "black",
                color: textcolor
            }}>
                <br/>
                <h1>
                    I'm a developer studying at the Georgia Institute of Technology
                </h1>
            </section>
        </div>
    )
}
export default Home