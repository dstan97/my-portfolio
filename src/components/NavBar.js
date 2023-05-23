import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="bg-purple-600">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/" exact activeClassName="text-purple-950" className="inlflex-flex items-center py-3 px-3 my-3 text-white hover:text-purple-600 hover:bg-white text-4xl font-bold Roboto tracking-widest">
                        Home
                    </NavLink>
                    <NavLink to="/post" activeClassName="text-purple-950" className="inlflex-flex items-center py-3 px-3 my-3 text-white hover:text-purple-600 hover:bg-white text-4xl font-bold Roboto tracking-widest">
                        Blog
                    </NavLink>
                    <NavLink to="/project" activeClassName="text-purple-950" className="inlflex-flex items-center py-3 px-3 my-3 text-white hover:text-purple-600 hover:bg-white text-4xl font-bold Roboto tracking-widest">
                        Projects
                    </NavLink>
                    <NavLink to="/about" activeClassName="text-purple-950" className="inlflex-flex items-center py-3 px-3 my-3 text-white hover:text-purple-600 hover:bg-white text-4xl font-bold Roboto tracking-widest">
                        About
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-3">
                    <SocialIcon url="https://github.com/dstan97" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/dean-standerwick-b41769255/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}