import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components";
import Contact from "../pages/Contact";
import Toggle from "./Toggle";

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
`
export default function NavBar({lightMode,setMode}) {
    function changeMode() {
        if (lightMode) {
            setMode(false)
        } else {
            setMode(true)
        }
    }

    return (
        <nav className="nav" style={{position:"sticky",top:0}}>
            <Container>
                <Link to="/" className="site-title">
                    <div className="logo">
                        Sean<br/>Yoshihara
                    </div>
                </Link>
                <ul>
                    <div>
                        <CustomLink to="/projects">Projects</CustomLink>
                    </div>
                    <div>
                        <CustomLink to="/about">About</CustomLink>
                    </div>
                    <DarkModeSwitch
                        checked={!lightMode}
                        onChange={changeMode}
                        size={30}
                        moonColor={"#db3b86"}
                        sunColor={"hotpink"}
                    />
                </ul>

            </Container>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}

