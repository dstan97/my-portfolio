import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
    useEffect(() => {
        document.title = 'Blog';
      }, []);

    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"] | order(_createdAt desc){
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
    }, []);

    return (
        <main className="">
            <section className="container mx-auto">
                <h1 className="text-secondary text-5xl flex justify-center Roboto">Blog Posts</h1>
                <h2 className="text-lg text-secondary flex justify-center mb-12">Welcome to my blog</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                <article className="post-article">
                                    <span className="block h-64 relative rounded leading-snug" key={index}>
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
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}