import React from 'react';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Homepage} />
      </Router>
    </div>
  );
}

export default App;
