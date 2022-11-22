import React from "react"
import { Link } from "react-router-dom"
import { ThemeContext } from "./Context"

function Navigation() {
    const { theme, changeTheme } = React.useContext(ThemeContext)
    console.log(theme)

    return (
        <nav className={`navbar navbar-expand-lg navbar-${theme} bg-${theme}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to={"/"}>Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-Link active" aria-current="page" to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to={"/users"}>Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-Link" to={"/counter"}>Counter</Link>
                        </li>
                        <li className="nav-item">
                            <button className="btn" onClick={changeTheme}>Change Theme</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation