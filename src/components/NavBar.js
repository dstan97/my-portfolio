import React from "react"
import { NavLink } from "react-router-dom"
import { SocialIcon } from "react-social-icons"

export default function NavBar() {
    return (
        <header className="m-0">
            <div className="flex justify-between bg-secondary p-3 md:p-0 md:bg-transparent">
                <nav className="flex justify-between uppercase text-base md:text-3xl text-primary md:bg-secondary rounded-br-3xl w-3/4 md:w-1/3 md:p-3 h-1/4 md:m-0 m-auto">
                    <NavLink to="/" exact className="font-bold Roboto hover:text-white">
                        Home
                    </NavLink>
                    <NavLink to="/post" className="font-bold Roboto hover:text-white">
                        Blog
                    </NavLink>
                    <NavLink to="/project" className="font-bold Roboto hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to="/contact" className="font-bold Roboto hover:text-white">
                        Contact
                    </NavLink>
                </nav>
                <div className="w-1/4 flex justify-end md:p-3 h-1/4 md:m-0 m-auto">
                    <SocialIcon url="https://github.com/dstan97" className="mr-2 rounded-full bg-primary" bgColor="#161616" target="_blank" style={{ height: 35, width: 35}} />
                    <SocialIcon url="https://www.linkedin.com/in/dean-standerwick-b41769255/" className="rounded-full bg-primary" target="_blank" bgColor="#161616" style={{ height: 35, width: 35}} />
                </div>
            </div>
        </header>
    )
}