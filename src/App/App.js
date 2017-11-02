import React from 'react';
import Microblog from "../Microblog/Microblog";
import AppClass from './App.css'
import About from '../About/About'
import NavigationBar from "../NavigationBar/NavigationBar";
import {BrowserRouter, Route} from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
        <BrowserRouter>
          <div className={AppClass.container}>
            <NavigationBar/>
            <Route exact path="/" component={Microblog}/>
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
