import React from 'react';
import Map from './Map';
import './Getinvloved.css';

const getinvloved = ()=>{
    return (
        <section id='getinvolved-section' >
            <div className="getinvolved-top text-center">
                <h3>We at CGS are seeking to know and make known</h3> 
                <h3>the Real Jesus, </h3> 
                <h3>for the sake of Real People, </h3>  
                <h3>in and for the Real World.</h3>  
                <div className="buttons">
                    <button className="btn btn-warning mb-5">Join Community Group</button>
                </div>
            </div>
            <div className="getinvolved-bottom">
                <div className="row">
                    <div className="col-md-4  p-5">
                        <div className="directions-text">
                            <div className="heading">
                                <h3>Lucky Summer Estate</h3>
                                <h3>Sunday service 9:00 AM</h3>
                                <h4>Office HoursL Monday - Wednesday -Friday 4PM to 6PM</h4>
                                <button className="btn btn-warning">Directions</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="directions-map">
                            <Map />
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}


export default getinvloved;