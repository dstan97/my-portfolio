import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";

export default function SinglePost() {
    const [singlePost, setSinglePost] = useState(null);
    const { slug } = useParams();

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
               title,
               _id,
               slug,
               mainImage{
                asset->{
                    _id,
                    url
                },
                alt
               },
               body
            }`)
            .then((data) => setSinglePost(data[0]))
            .catch(console.error);
    }, [slug]);

    if (!singlePost) return <div></div>;

    return (
        <main className="">
            <article className="container shadow-lg shadow-secondary-dark mx-auto bg-primary">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-primary bg-opacity-75 rounded p-12">
                            <h1 className="Roboto text-secondary-dark text-3xl lg:text-6xl mb-4">
                                {singlePost.title}
                            </h1>
                        </div>
                    </div>
                    <img
                        src={singlePost.mainImage.asset.url}
                        alt={singlePost.title}
                        className="w-full object-cover rounded-t"
                        style={{ height: "400px" }}
                    />
                </header>
                <div className=" prose lg:prose-xl max-w-full">
                    <BlockContent
                        blocks={singlePost.body}
                        projectId="arnxyktp"
                        dataset="production"
                    />
                </div>
            </article>
        </main>
    )
}