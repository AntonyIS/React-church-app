import React,{Component} from 'react';



class Hero extends Component {
    
    render(){
        return(
            <div id="hero-section" className="pt-5">
                <div className="container text-center pt-5">
                    <div className="hero-text pt-5 mb-5">
                        <h1>Ruaraka Friends Church.</h1>
                        <h1>God above all.</h1> 

                        <h3>Worship with us from 8:00 AM</h3>
                    </div>
                    <div className="hero-btns">
                        <button className="btn btn-info mr-3">Sermons</button>
                        <button className="btn btn-outline-info ">Prayer groups</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero;
