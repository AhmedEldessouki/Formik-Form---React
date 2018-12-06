import React, { Component } from 'react';
import './App.scss';
import FormikForm from './component/FormikForm/FormikForm'
import SignUp from './component/SignUp/SignUp'

class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="App-main">
          <FormikForm />
          <SignUp/>
        </main>
      </div>
    );
  }
}

export default App;
