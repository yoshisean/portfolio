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
        <div className="App" style={{width: "100vw",
            display:"flex",
            flexDirection:"column"
        }}>
            <NavBar lightMode={lightMode} setMode={setMode}/>
            <div>
                <div className={"container"}>
                    <Routes>
                        <Route exact path="/" element={<Home lightMode={lightMode}/>}/>
                        <Route path="/about" element={<About lightMode={lightMode}/>}/>
                        <Route path="/projects" element={<Projects lightMode={lightMode}/>}/>
                        <Route path='*' element={notFound()}></Route>
                    </Routes>
                    <div>
                        <Footer lightMode={lightMode}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
