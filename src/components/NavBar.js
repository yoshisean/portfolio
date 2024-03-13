import React from "react";
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import styled from "styled-components";

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
    let textcolor = lightMode? "black":"white"
    return (
        <nav className="nav" style={{position:"sticky",top:0}}>
            <Container style={{color:textcolor}}>
                <Link to="/" style={{
                    paddingLeft:"2%",
                }}>
                    <div style={{
                        width:"100%"
                    }}>
                        SEAN<br/>YOSHIHARA
                    </div>
                </Link>
                <ul style={{
                    paddingRight:"2%",
                    maxWidth:"50vw"
                }}>
                    <li>
                        <CustomLink to="/works">WORKS</CustomLink>
                    </li>
                    <li>
                        <CustomLink to="/about">ABOUT</CustomLink>
                    </li>
                    <li>
                        <DarkModeSwitch
                            checked={!lightMode}
                            onChange={changeMode}
                            size={30}
                            moonColor={"white"}
                            sunColor={"black"}
                            style={{
                                height: "22px",
                                width: "22px",
                            }}
                        />
                    </li>
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

