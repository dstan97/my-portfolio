import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-gradient-to-br from-secondary to-secondary-dark">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact className="inlflex-flex items-center py-3 px-3 my-3 text-primary hover:text-primary-dark text-4xl font-bold Roboto tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post" className="inlflex-flex items-center py-3 px-3 my-3 text-primary hover:text-primary-dark text-4xl font-bold Roboto tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink to="/project" className="inlflex-flex items-center py-3 px-3 my-3 text-primary hover:text-primary-dark text-4xl font-bold Roboto tracking-widest">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="inlflex-flex items-center py-3 px-3 my-3 text-primary hover:text-primary-dark text-4xl font-bold Roboto tracking-widest">
                        Contact
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-3">
                    <SocialIcon url="https://github.com/dstan97" className="mr-4" target="_blank" fgColor="#fff3e2" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/dean-standerwick-b41769255/" className="mr-4" target="_blank" fgColor="#fff3e2" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}