import React from 'react';
import Homepage from './components/Homepage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';

function App() {
  return (
    <div className="App">
      <ToastProvider>
        <Router>
          <Route path="/" component={Homepage} />
        </Router>
      </ToastProvider>
    </div>
  );
}

export default App;
