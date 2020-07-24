import React from 'react';
import './Sermon.css';
import Card from './Card';

const sermon = (props) =>{
    return (
        <section id="Sermon">
            <div class="sermon-top container">
                <div className="row mb-3">
                    {props.mycards.map((card, index)=>{
                        return(
                             <div className="col-md-3 pt-5">
                                 <Card name={card.name} speaker={card.speaker} text={card.text} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default sermon;