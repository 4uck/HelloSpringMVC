import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import HumanView from './components/HumanView'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class RootComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route path="/humans/:id" component={HumanView}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
