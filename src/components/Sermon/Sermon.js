import React from 'react';
import Card from './Card'
import './Sermon.css';


const sermon = (props)=>{
    return (
        <section id="sermonId" className="sermon">
            <div className="top-section" id="sermon-top">

            </div>
            <div className="bottom-section" id="sermon-bottom">
                <div className="container pt-3">
                    <h1>Latest Sermons</h1>
                    <div className="row pt-5">
                        {
                           props.sermonData.map((sermon, index)=>{
                            return (
                                <div className="col-md-4">
                                    <Card
                                    name={sermon.name} 
                                    text={sermon.text}
                                    
                                 />
                                </div>
                            )
                           })
                        }
                    </div>
                    <button className="btn btn-info">All sermons</button>
                </div>
            </div>
        </section>
    )
}


export default sermon;