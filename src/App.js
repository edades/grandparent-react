import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxParent from './BoxParent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: 'default info'
    }

    this.updateState = this.updateState.bind(this);
  }

  updateState(data){
    this.setState({
      info: data
    });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          {this.state.info}
        </p>
        {
        //goAction es el props que se utilizará en BoxParent 
        //this.updateState es la llamada al evento que realiza el cambio de estado 
        //con el (o los) parametro pasado en el componente hijo
        }
        <BoxParent goAction={this.updateState}/>
      </div>
    );
  }
}

export default App;
