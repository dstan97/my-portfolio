import React from "react";

export default function Footer() {
    return (
        <footer className="bg-secondary fixed bottom-0 w-full">
            <p className="text-center text-primary">Dean Standerwick © {new Date().getFullYear()}</p>
        </footer>
    )
}