import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    // initializing use location
    let location = useLocation()

    useEffect(() => {
        console.log(location.pathname)
    }, [location])

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
                            <span className={`${location.pathname === '/' ? 'text-white' : ""} nav-link text-secondary`} aria-current="page" href="#">Home</span>
                        </Link>
                        <Link to='/about' className="nav-item text-decoration-none">
                            <span className={`${location.pathname === '/about' ? 'text-white' : ""} nav-link text-secondary`} href="#">About</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
