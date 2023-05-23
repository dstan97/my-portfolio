import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";

export default function Project() {
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
        <main className="bg-stone-800 min-h-screen p-12">
            <section className="container mx-auto">
                <h1 className="text-white text-5xl flex justify-center Roboto">Projects</h1>
                <h2 className="text-lg text-white flex justify-center mb-12">Completed projects that I have made</h2>
                <section className="grid md:grid-cols-2 lg:grid-col-3 gap-8">
                    {projectData && projectData.map((project, index) => (
                        <article className="relative rounded-lg shadow-xl bg-white p-16">
                            <h3 className="text-purple-900 text-3xl font-bold hover:text-purple-600">
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {project.title}
                                </a>
                            </h3>
                            <div className="text-purple-600 text-xs space-x-4">
                                <span>
                                    <strong className="font-bold">Finished on</strong>:{" "}
                                    {new Date(project.date).toLocaleDateString()}
                                </span>
                                <span>
                                    <strong className="font-bold">Type</strong>:{" "}
                                    {project.projectType}
                                </span>
                                <p className="my-6 text-lg text-purple-600 leading-relaxed">
                                    {project.description}
                                </p>
                                <a
                                    href={project.link}
                                    alt={project.title}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-900 font-bold hover:underline hover:text-purple-600 text-xl"
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