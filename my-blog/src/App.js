import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <HomePage></HomePage>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route 
            path="/"
            component={HomePage}
            exact
          />
        </div>
      </Router>
    )
  }
}

export default App;
