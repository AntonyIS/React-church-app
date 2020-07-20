import React from 'react';
import Img from '../images/bg_img1.jpg';
 



export default function Card(){
    
    
    return (

        <div>
            <div className="card shadow  mb-3 bg-white rounded" style={{width: "18rem"}}>
                <img className="card-img-top" src={Img} alt="Card image cap" />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                   
                </div>
            </div>
        </div>
    )
}