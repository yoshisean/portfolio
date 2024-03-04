import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Projects from "./pages/Projects";
import NavBar from "./components/NavBar";
import {Route, Routes} from "react-router-dom";
import notFound from "./pages/notFound";
import Home from "./pages/Home";

function App() {
    const [lightMode,setMode] = useState(true)
    return (
        <div className="App" style={{height: "100vh", width: "100vw"}}>
            <NavBar lightMode={lightMode} setMode={setMode}/>
            <div className={"container"}>
                <Routes>
                    <Route exact path="/" element={<Home lightMode={lightMode}/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path='*' element={notFound()}></Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
