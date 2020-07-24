module.exports = `import React from 'react';
    import {render} from 'react-dom';
    import App from './App';
    import store from './store.js'
    import { Provider } from 'react-redux'
    import { HashRouter as Router } from 'react-router-dom'
render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
, document.getElementById('root'));`