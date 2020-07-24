module.exports = `import React, { Component } from 'react'
   import mytidbit_logo from './mytidbit_logo.svg'
   import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div style={{textAlign: 'center', position: 'relative', top:'250px'}}>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Mytidbit React boilerplate</h2>
        </div>
      </div>
    );
  }
}
export default connect(state=>({}),{})(App)`