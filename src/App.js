import React, { Component } from 'react';
import './App.scss';
import FormikForm from './component/FormikForm/FormikForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FormikForm />
        </header>
      </div>
    );
  }
}

export default App;
