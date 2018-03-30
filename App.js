import React, { Component } from 'react';
import './App.css';
import Caption from './component/Caption';
import CardContent from './component/cardComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Caption />
        <CardContent />
      </div>
    );
  }
}

// <CardContent> <Caption /> </CardContent>
export default App;
