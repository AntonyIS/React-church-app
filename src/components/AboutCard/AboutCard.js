import React from 'react';
import './AboutCard.css';
import Card from './Card';

const aboutcard = (props) =>{
    
    return (
        <section id="AboutCard" className="pb-5">
            <div class="AboutCard-top container">
                <div className="row">
                    {props.mycards.map((card, index)=>{
                        return(
                             <div className="col-md-3 col-lg-3 col-xl-3  pt-5">
                                 <Card 
                                    name={card.name} 
                                    speaker={card.speaker} 
                                    text={card.text} 
                                    img={card.bgImg}
                                    mykey={index}
                                 />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default aboutcard;