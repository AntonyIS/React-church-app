import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutCard from './components/AboutCard/AboutCard';
import Sermon from './components/Sermon/Sermon';

// images
import img1 from './assets/images/img1.jpg';
import img2 from './assets/images/img2.jpg';
import img3 from './assets/images/img3.jpg';
import img4 from './assets/images/img4.jpg';


class App extends React.Component {
  state = {
    cards: [
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img1},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img2},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img3},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img4},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img3},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img2},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img1},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16",bgImg: img4},
     
    ]
  }
  render(){
    return (
      <div className="App">
       
        <Navbar /> 
        <Hero />
        <AboutCard mycards = {this.state.cards} />
        <Sermon sermonData = {this.state.cards.slice(0,6)} />
      </div>
    );
  }
}

export default App;
