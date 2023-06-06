import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import Pdf from '../../src/Dean Standerwick CV.pdf';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Home() {
    useEffect(() => {
        document.title = 'Homepage';
      }, []);

    const [author, setAuthor] = useState(null);
    const [postData, setPost] = useState(null);
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
               name,
               bio,
               "authorImage": image.asset->url
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, [])
    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc) [0...2]{
               title,
               slug,
               mainImage{
                asset->{
                    _id,
                    url
                },
                alt
               }
            }`)
            .then((data) => setPost(data))
            .catch(console.error);
    }, [])
    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"] | order(_createdAt desc) [0...2]{
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

    if (!author) return <div></div>;

    return (
        <main className="z-40">
            <div className="container mx-auto">
                <section className="lg:flex p-4 md:px-20 mt-32">
                    <div className="flex">
                        <img
                            src={urlFor(author.authorImage).url()}
                            className="w-32 h-32 lg:w-64 lg:h-64 md:mr-8 mx-auto justify-center rounded-full border-secondary border-4"
                            alt={author.name}
                        />
                    </div>
                    <div className="text-lg flex flex-col justify-center text-secondary font-bold">
                        <h1 className="Roboto text-5xl md:text-6xl mb-4 uppercase">{author.name}</h1>
                        <div className="prose lg:prose-xl">
                            <BlockContent
                                blocks={author.bio}
                                projectId="arnxyktp"
                                dataset="production"
                            />
                        </div>
                        <a href = {Pdf} className="w-full md:w-1/4 my-10">
                            <button className="btn border-2 bg-secondary border-secondary rounded-xl text-primary hover:bg-primary hover:text-secondary p-4 text-2xl w-full h-full">View CV</button>
                        </a>
                    </div>
                </section>
                <hr className="border-secondary border-2 opacity-25 rounded-xl my-10"></hr>
                <section className="container mx-auto md:px-20 text-secondary">
                    <h2 className="Roboto text-2xl md:text-3xl mb-10 text-center">Latest Blog Posts</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                        {postData && postData.map((post, index) => (
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <article className="post-article">
                                    <span className="block h-64 relative rounded-xl leading-snug" key={index}>
                                        <div className="img-wrapper rounded">
                                            <img
                                                src={post.mainImage.asset.url}
                                                alt={post.mainImage.alt}
                                                className="object-cover w-full h-full absolute"
                                            />
                                        </div>
                                        <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                            <h3 className="text-primary text-lg font-blog bg-secondary rounded p-2">
                                                {post.title}
                                            </h3>
                                        </span>
                                    </span>
                                </article>
                            </Link>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to="/post">
                            <button className='btn blog-btn border-2 bg-secondary border-secondary rounded-xl text-primary hover:bg-primary hover:text-secondary mt-10 p-4 text-2xl'>View Blog Posts</button>
                        </Link>
                    </div>
                </section>
                <hr className="border-secondary border-2 opacity-25 rounded-xl my-10"></hr>
                <section className="container mx-auto md:px-20">
                    <h2 className="Roboto text-2xl md:text-3xl mb-10 text-center">Latest Projects</h2>
                    <div className="grid md:grid-cols-3 lg:grid-col-3 gap-8">
                        {projectData && projectData.map((project, index) => (
                        <Link className="project-article" to={project.link} target="_blank">
                        <article className=" relative rounded-lg mx-auto border-2 border-secondary text-primary bg-secondary hover:text-secondary hover:bg-primary transition ease-in-out p-8 md:p-16">
                                <h3 className="text-3xl font-bold">
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <div className="text-xs space-x-4">
                                    <span>
                                        <strong className="font-bold">Finished on</strong>:{" "}
                                        {new Date(project.date).toLocaleDateString()}
                                    </span>
                                    <span>
                                        <strong className="font-bold">Type</strong>:{" "}
                                        {project.projectType}
                                    </span>
                                    <p className="my-6 text-lg leading-relaxed">
                                        {project.description}
                                    </p>
                                    <a
                                        href={project.link}
                                        alt={project.title}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold hover:underline text-xl"
                                    >
                                        View The Project{" "}
                                        <span role="img" aria-label="right pointer">🡆</span>
                                    </a>
                                </div>
                        </article>
                    </Link>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Link to="/project">
                            <button className='btn project-btn border-2 bg-secondary border-secondary rounded-xl text-primary hover:bg-primary hover:text-secondary my-10 p-4 text-2xl'>View Projects</button>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}