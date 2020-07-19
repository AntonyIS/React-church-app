import React,{Component} from 'react';
import ReactDom from 'react-dom';

class Hero extends Component {
    
    render(){
        return(
            <div id="hero-section">
                <div className="container">
                    <div className="hero-text">
                        <h1>Ruaraka Friends Church.</h1>
                        <h1>God above all.</h1> 
                    </div>
                    <div className="hero-btns">
                        <button className="btn btn-info ">Sermons</button>
                        <button className="btn btn-outline-info ">Prayer groups</button>
                    </div>
                </div>
            </div>
        )
    }
}