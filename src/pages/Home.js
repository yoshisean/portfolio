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
                <img src={"./assets/profile.JPG"} style={{
                    width: "30%", paddingLeft:"10%", borderRadius:"50%"
                }}/>
            </section>
        </div>
    )
}
export default Home