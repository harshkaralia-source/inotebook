import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand fw-medium text-white" href="/">Inotebook</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to='/' className="nav-item text-decoration-none">
                            <span className="nav-link text-white active" aria-current="page" href="#">Home</span>
                        </Link>
                        <Link to='/about' className="nav-item text-decoration-none">
                            <span className="nav-link text-white" href="#">About</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
