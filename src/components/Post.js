import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Post() {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "post"]{
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
        <main className="min-h-screen md:p-12">
            <section className="container mx-auto">
                <h1 className="text-secondary text-5xl flex justify-center Roboto">Blog Posts</h1>
                <h2 className="text-lg text-secondary flex justify-center mb-12">Welcome to my blog</h2>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">
                    {postData && postData.map((post, index) => (
                        <article>
                            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                            <span className="block h-64 relative rounded shadow leading-snug bg-gradient-to-br from-secondary to-secondary-dark" key={index}>
                                <img
                                    src={post.mainImage.asset.url}
                                    alt={post.mainImage.alt}
                                    className="w-full h-full rounded object-cover absolute"
                                />
                                <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                                    <h3 className="text-primary text-lg font-blog py-4 bg-secondary-dark rounded p-2">
                                        {post.title}
                                    </h3>
                                </span>
                            </span>
                            </Link>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}