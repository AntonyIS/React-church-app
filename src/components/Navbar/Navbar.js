import React from 'react';
import './Navbar.css'

const navbar = ()=>{
    window.addEventListener("scroll", ()=>{
        let menuArea = document.getElementById("menu-area");
      
      
        if(window.pageYOffset > 1 ){
          menuArea.classList.add("custom_nav")
      
        }else{
          menuArea.classList.remove("custom_nav")
        }
      });
      
    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="menu-area">
                <div className="container">
                    <a className="navbar-brand" href="/#">Ruaraka Friends Church</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">New Here</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#AboutCard">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/sermon-section">Sermons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Connect</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Serve</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="/#">Memeber login</a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" id="search-form" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-dark my-2 my-sm-0 " id="cust_btn" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default navbar;