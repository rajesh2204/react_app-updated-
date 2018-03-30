import React, { Component } from 'react';
import { ImageComponent, TextComponent } from './ImageComponent';
class Caption extends Component {
  render() {
    return (
      <div>
        <TextComponent style={{ color: 'red' }} text={'Iot'} />
        <ImageComponent src={'http://pugholdit.herokuapp.com/500x400.jpg'} />
      </div>
    );
  }
}

export default Caption;
