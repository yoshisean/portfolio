import React, {useState} from 'react';

function Footer({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"

    return (
        <footer style={{
            bottom: 0,
            position:"fixed",
            color:textcolor,
            width:"100vw",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            verticalAlign: "middle",
            alignItems: "center"
        }}>
            <div style={{
                display: "flex",
                paddingLeft: "2%"
            }}>
                <a href={"https://github.com/yoshisean"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={lightMode ? "./socials/GitHub/github-mark.png" :
                        "./socials/GitHub/github-mark-white.png"} alt={"GH"} style={{
                        height: "50px", width: "50px"
                    }}/>
                </a>
                <a href={"https://www.instagram.com/yoshi.sean/"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={"./socials/Instagram/instagramLogo.png"} alt={"Insta"} style={{
                        height: "50px", width: "50px", paddingLeft: "10px"
                    }}/>
                </a>
                <a href={"https://www.linkedin.com/in/sean-yoshihara-45b937245/"} target="_blank" rel="noopener noreferrer" className={"social"}>
                    <img src={"./socials/LinkedIn/LI-In-Bug.png"} alt={"LI"} style={{
                        height: "50px", width: "60px", paddingLeft: "10px"
                    }}/>
                </a>
            </div>
            <div style={{
                paddingRight: "2%"
            }}>
                <p style={{lineHeight:"1.65"}}>&copy; Sean Yoshihara 2024<br/>Software Engineer</p>
            </div>
        </footer>
    );
}

export default Footer;