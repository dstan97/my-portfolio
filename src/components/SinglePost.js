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

    if (!singlePost) return <div>Loading...</div>;

    return (
        <main className="bg-stone-800 min-h-screen p-12">
            <article className="container shadow-lg mx-auto bg-white rounded-lg">
                <header className="relative">
                    <div className="absolute h-full w-full flex items-center justify-center p-8">
                        <div className="bg-purple-600 bg-opacity-75 rounded p-12">
                            <h1 className="Roboto text-white text-3xl lg:text-6xl mb-4">
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
                <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
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