import React from 'react';


const card = (props)=>{
    const imgpath = props.img;

    const cardStyle = {
        backgroundImage:"url("+imgpath+")",
        backgroundColor:" #eee",
        backgroundSize: "cover",
        fontFamily: "sans-serif",
        backgroundRepeat:" no-repeat",
        height: "100%",
        color: "#"
       
    }
    return (
        <div className="card  text-center shadow p-3 mb-5 bg-white rounded" style={cardStyle}>
           
            <div className="card-body ">
                <h2>{props.name}</h2>
                <hr />
                <p>{props.speaker}</p>
                <p>{props.text}</p>
                <hr  style={{height:"2px"}}/>
            </div>
        </div>
    )
}


export default card