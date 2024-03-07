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
                <Link to="/" style={{paddingLeft:"2%"}} className={""}>
                    SEAN<br/>YOSHIHARA
                </Link>
                <ul style={{
                    paddingRight:"2%"
                }}>
                    <div>
                        <CustomLink to="/works">WORKS</CustomLink>
                    </div>
                    <div>
                        <CustomLink to="/about">ABOUT</CustomLink>
                    </div>
                    <div>
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
                    </div>

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

