import React from 'react';

const sermonCard =(props)=>{
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body text-center">
                <h5>{props.name}</h5>
                <p>{props.text}</p>
            </div>
        </div>
    )
}


export default sermonCard;