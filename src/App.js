import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Sermon from './components/Sermon/Sermon';


class App extends React.Component {
  state = {
    cards: [
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"},
      {name:"Living in Christ", speaker:"John Muyangu", text:"John 3:16"}
    ]
  }
  render(){
    return (
      <div className="App">
        <Navbar /> 
        <Hero />
        <Sermon mycards = {this.state.cards} />
      </div>
    );
  }
}

export default App;
