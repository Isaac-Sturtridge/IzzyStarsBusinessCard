import React from "react"

export default function Navbar(){
    return (
        <nav>
            <img src={require('../images/neptune.jpg')} className="nav--icon" />
            <h1 className="nav--logo-text">Planet Facts</h1>
            <h2 className="nav--title">React Course - Project 1</h2>
        </nav>
    )
}