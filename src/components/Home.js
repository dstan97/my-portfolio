import React, { useState, useEffect } from "react";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source);
}

export default function Home() {
    const [author, setAuthor] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
               name,
               bio,
               "authorImage": image.asset->url
            }`)
            .then((data) => setAuthor(data[0]))
            .catch(console.error);
    }, []);

    if (!author) return <div>Loading...</div>;

    return (
        <main className="min-h-screen p-12">
            <div className="p-10 lg:pt-48 container mx-auto relative">
                <section className="bg-gradient-to-br from-secondary to-secondary-dark rounded shadow-2xl shadow-secondary-dark lg:flex p-20">
                    <img
                        src={urlFor(author.authorImage).url()}
                        className="w-32 h-32 lg:w-64 lg:h-64 mr-8"
                        alt={author.name}
                    />
                    <div className="text-lg flex flex-col justify-center">
                        <h1 className="Roboto text-6xl bg-clip-text bg-gradient-to-b text-transparent to-primary-dark from-primary mb-4">{author.name}</h1>
                        <div className="prose lg:prose-xl text-primary">
                            <BlockContent
                                blocks={author.bio}
                                projectId="arnxyktp"
                                dataset="production"
                            />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}