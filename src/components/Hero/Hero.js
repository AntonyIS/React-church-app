import React from 'react';
import './Hero.css'

const hero = ()=>{


    return (
        <section id="Hero" className="pt-5">
            <div className="container text-center pt-5">
                <div className="hero-text pt-5">
                    <h1>Real Jesus. Real People</h1> <br />
                    <h1>Real World</h1>
                    <button className="btn btn-warning m-2">Sermons</button>
                    <button className="btn btn-warning m-2">Welcome</button>
                    <button className="btn btn-warning m-2">Donate</button>
                </div>
            </div>
        </section>
    )
}


export default hero;