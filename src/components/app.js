import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      	
      	{this.props.children}
      </div>
    );
  }
}
// place children routes inside of {this.props.children} (nested routes)