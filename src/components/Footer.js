
import React from 'react';

function Footer({lightMode}) {
    let textcolor = lightMode? "hotpink":"white"
    return (
        <footer style={{
            color:textcolor,
            backgroundColor: lightMode ? "#eeeffe" : "black",
            position:"absolute",
            width:"100vw",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            verticalAlign: "middle",
            alignItems: "center",
        }}>
            <div style={{
                paddingLeft:"10px"
            }}>
                stuff
            </div>
            <div style={{
                paddingRight:"10px"
            }}>
                <p>&copy; Sean Yoshihara 2024</p>
                <p>Software Engineer</p>
            </div>
        </footer>
    );
}
export default Footer;