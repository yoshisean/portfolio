import Hero from "./Hero";
import React from "react";

function Home({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"

    return(
        <div style={{
            marginTop:"-5%",
            position:"fixed",
            width:"100vw"
        }}>
            <Hero lightMode={lightMode}/>
        </div>
    )
}
export default Home