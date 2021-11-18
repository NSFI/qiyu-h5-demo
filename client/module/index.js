import 'CSS/base.less';
import 'CSS/style.less';

import React, {Component} from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Main from './pages/Main';
import About from './pages/About';
import Users from './pages/Users';

class App extends Component {
    componentDidMount() {
        
    }

    render() {
        return (
            <Router>
                <div className="m-app">
                    <Switch>
                        <Route exact path="/">
                            <Main />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/users">
                            <Users />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

render(<App/>, document.getElementById('j-root'));
