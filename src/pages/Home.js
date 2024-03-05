import Hero from "./Hero";
import Footer from "../components/Footer";
import React from "react";

function Home({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"

    return(
        <div style={{
            marginTop:"-5%",
            position:"fixed"
        }}>
            <Hero lightMode={lightMode}/>
        </div>
    )
}
export default Home