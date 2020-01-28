import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import HumanView from './components/HumanView'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class About extends React.Component{
    render() {
        return (
            <div><h3>About</h3></div>
        )
    }
}

class RootComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/about" component={About}/>
                    <Route path="/human/:id" component={HumanView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
