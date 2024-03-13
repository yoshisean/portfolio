import React, {useState} from "react";

const projects = [
    {
        key:0,
        name: 'Portfolio',
        description: "I had a lot of fun with this one. Made using React, THREE.JS (react three fiber)," +
            " and CSS. Every asset (other than logos) is custom made. I was having trouble exporting the fish " +
            "animation as a glb from blender until I found out I was using almost 800x the maximum possible polygon " +
            "count. After that I opted to model a low poly fish with an image texture instead. The geometry node " +
            "animation is exported and imported back as an mdd file to allow for use in THREE. The scene came " +
            "together almost exactly as I had imagined, although I did have to cut back on a few interactive features " +
            "to improve frame count. The mouse follow interaction is dictated by basic camera controls. I opted " +
            "not to overcomplicate things and stick with a simple layout, font, and color palette.",
        image:"./assets/portfolioSite.png",
        year:"2024",
        link:"https://yoshisean.github.io/"
    },
    {
        key:1,
        name: 'AlgoVis',
        description: "A tool for algorithm visualization using interactive 3D elements. I've been working on this" +
            " one with a friend. We realized that many algorithms were hard to visualize from just looking at" +
            " pseudocode. We figured 3D renders would help comprehension (and would be much cooler). " +
            "I worked on some RRT implementation but mostly on website setup and THREE.JS canvas integration. " +
            "The goal is to gradually add more and more algorithms to the website even if they aren't strictly " +
            "related to CS or robotics. As a side goal, mobile integration leaves much to be desired. Definitely" +
            " something I'll fix up when I have time. ",
        image:"./assets/algovisSite.png",
        year:"2024",
        link:"https://trollsinc.github.io/"
    },
    {
        key:2,
        name: 'Point Drift',
        description: "While I was studying abroad in Berlin over the summer, I co-founded an AI coding startup with" +
            " a few friends. We were working on techniques that enable AI coding assistants to make decisions that were " +
            "tailored to specific codebases. Important to note that crazy context windows like Gemini with 1 million+ tokens were" +
            " not yet a thing at that point in time. Alongside the usual customer discovery and product market fit evaluation," +
            " I was tasked with building a basic company homepage. This was built in around 3 days so I was especially happy with how " +
            "it turned out. I recently updated the site to be more mobile friendly, but the original look has been maintained.",
        image:"./assets/pointdriftSite.png",
        year:"2023",
        link:"https://pointdrift.com/"
    },
]
function ProjectList({lightMode}) {
    let textcolor = lightMode? "black":"white"
    const pList = projects.map(project =>
        <li style={{
            listStyleType:"none",
            maxWidth:"100vw",
        }}>
            <div style={{display:"block", textAlign: "left", verticalAlign:"top"}}>
                <p style={{paddingRight: "2vw", display: "block",verticalAlign:"top"}}>
                    <h2 style={{fontSize:"40px", left:0}}>{project.name}: </h2>
                </p>
                <div style={{display:"inline-flex", verticalAlign:"top"}}>
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{
                            objectFit: "contain",
                            width: "40vw",
                            height: "fit-content",
                            aspectRatio: "auto",
                            borderRadius: "5px",
                            border: "1px solid {borderColor}",
                            backgroundClip:"border-box"
                    }}
                    />
                    <p style={{
                        paddingLeft: "1vw", paddingRight: "2vw", marginRight: "2vw",
                        float: "left", display: "inline-block"
                    }}>
                        {project.description}
                        <div style={{
                            display:"flex", verticalAlign:"middle",alignItems:"center"
                        }}>
                            <p style={{fontWeight: "bold"}}>
                                {project.year}
                            </p>
                            <pre>...</pre>
                            <a href={project.link} target="_blank"
                               rel="noopener noreferrer" style={{color:textcolor,textDecoration:"underline"}}
                                className={"social"}>
                                <h2>Visit</h2>
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </li>
    );
    return <ul style={{
        margin: "0",
        padding: "0"
    }}>{pList}</ul>
}

export default ProjectList