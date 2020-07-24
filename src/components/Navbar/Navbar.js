import React from 'react';
import './Navbar.css'

const navbar = ()=>{
    return (
        <div className="Navbar">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a class="navbar-brand" href="/#">Ruaraka Friends Church</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/#">New Here</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Gather</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Connect</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/#">Serve</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" id="search-form" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-dark my-2 my-sm-0 " id="cust_btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default navbar;