import React,{Component} from 'react';
import Card from './Card'


class About extends Component {
    
    render(){
        return(
            <div id="about-section" className="container pt-5">
                <div className="row">
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                </div>
                <div className="row">
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                     <div className="col-md-3">
                          <Card />
                     </div>
                </div>
            </div>
        )
    }
}

export default About;
