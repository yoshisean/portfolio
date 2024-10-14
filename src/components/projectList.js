import React, {useState} from "react";

const projects = [
    {
        key: 0,
        name: 'DataFront',
        description: "Work in progress on a NextJS site that allows users to visualize their data " +
            "in graph form. I'm using Supabase (PostgreSQL) on the backend along with AWS S3 to store user files. " +
            "Users can create workspaces which can have folders and files. Each file takes in user data in CSV format" +
            "(more file support WIP) and converts it into a graph of the users choice. Users can then choose which column" +
            " to use for the x and y-axis. Multi axis support is included, which means multiple sources of data can be handled." +
            " With inputs for chart title, description, and footer included, making a beautiful graph for a presentation" +
            " can be finished with just a few clicks. The settings for the graph are saved on change so data loss is unlikely. " +
            "Users can then save an image of the graph with a click of a button." +
            " User collaboration and Stripe payment integration is coming soon. By far my most in depth project. No link as the product is still" +
            " in development. ",
        image:"./assets/datafrontSite.png",
        year: "Summer-Fall 2024",
    },
    {
        key:1,
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
        year:"Spring 2024",
        link: 'https://yoshisean.com/'
    },
    {
        key:2,
        name: 'AlgoVis',
        description: "A tool for algorithm visualization using interactive 3D elements. I've been working on this" +
            " one with a friend. We realized that many algorithms were hard to visualize from just looking at" +
            " pseudocode. We figured 3D renders would help comprehension (and would be much cooler). " +
            "I worked on some RRT implementation but mostly on website setup and THREE.JS canvas integration. " +
            "The goal is to gradually add more and more algorithms to the website even if they aren't strictly " +
            "related to CS or robotics. As a side goal, mobile integration leaves much to be desired. Definitely" +
            " something I'll fix up when I have time. ",
        image:"./assets/algovisSite.png",
        year:"Spring 2024",
        link:"https://trollsinc.github.io/"
    },
    {
        key:3,
        name: 'Point Drift',
        description: "While I was studying abroad in Berlin over the summer, I co-founded an AI coding startup with" +
            " a few friends. We were working on techniques that enable AI coding assistants to make decisions that were " +
            "tailored to specific codebases. Important to note that crazy context windows like Gemini with 1 million+ tokens were" +
            " not yet a thing at that point in time. Alongside the usual customer discovery and product market fit evaluation," +
            " I was tasked with building a basic company homepage. This was built in around 3 days so I was especially happy with how " +
            "it turned out. I recently updated the site to be more mobile friendly, but the original look has been maintained.",
        image:"./assets/pointdriftSite.png",
        year:"Summer 2023",
        link:"https://pointdrift.com/"
    },
]
function ProjectList({lightMode}) {
    let textcolor = lightMode? "black":"white"
    const pList = projects.map(project =>
        <li style={{
            listStyleType: "none",
            width: "100%",
        }}>
            <div style={{
                display: "block",
                textAlign: "left",
                overflow: "hidden",
                marginBottom: "2vw",
                padding: "1vw",
                boxSizing: "border-box"
            }}>
                <h2 style={{fontSize: "40px", margin: 0}}>{project.name}</h2>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    alignItems: "flex-start" // Align items to the top
                }}>
                    <img
                        src={project.image}
                        alt={project.name}
                        style={{
                            objectFit: "contain",
                            width: "40vw",
                            height: "auto",
                            borderRadius: "5px",
                            border: "1px solid #ccc", // Use a defined color
                            backgroundClip: "border-box",
                            flexShrink: 0 // Prevent image from shrinking
                        }}
                    />
                    <div style={{
                        flex: 1,
                        minWidth: "300px",
                        paddingLeft: "1vw",
                        paddingRight: "1vw"
                    }}> {/* Added paddingRight */}
                        <p style={{margin: 0}}>{project.description}</p>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <p style={{fontWeight: "bold", margin: 0}}>{project.year}</p>
                            {project.link ? (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: textcolor, textDecoration: "underline"}}
                                >
                                    <h2 style={{margin: 0}}>Visit</h2>
                                </a>
                            ) : null}
                        </div>
                    </div>
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