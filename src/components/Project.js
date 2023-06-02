import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
    useEffect(() => {
        document.title = 'Projects';
      }, []);

    const [projectData, setProjectData] = useState(null);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
               title,
               date,
               description,
               projectType,
               link,
               tags
            }`)
            .then((data) => setProjectData(data))
            .catch(console.error);
    }, []);

    return (
        <main className="z-40">
            <section className="container mx-auto">
                <h1 className="text-secondary text-5xl flex justify-center Roboto">Projects</h1>
                <h2 className="text-lg text-secondary flex justify-center mb-12">Completed projects that I have made</h2>
                <section className="grid md:grid-cols-2 lg:grid-col-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg mx-auto bg-secondary p-16">
                            <h3 className="text-white text-3xl font-bold hover:text-primary">
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-primary text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-primary leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white font-bold hover:underline hover:text-primary text-xl"
                                >
                                    View The Project{" "}
                                    <span role="img" aria-label="right pointer">🡆</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </section>
            </section>
        </main>
    )
}