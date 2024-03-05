import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import notFound from "./pages/notFound";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    const [lightMode,setMode] = useState(true)
    return (
        <div style={{
            backgroundColor: lightMode ? "#eeeffe" : "black",
            width: "100vw",
            minHeight:"100vh",
        }}>
            <NavBar lightMode={lightMode} setMode={setMode}/>
            <main className={"noScroll"}>
                <Routes>
                    <Route exact path="/" element={<Home lightMode={lightMode}/>}/>
                    <Route path="/about" element={<About lightMode={lightMode}/>}/>
                    <Route path="/projects" element={<Projects lightMode={lightMode}/>}/>
                    <Route path='*' element={notFound()}></Route>
                </Routes>
            </main>
            <Footer lightMode={lightMode}/>
        </div>
    );
}

export default App;
