import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import {getRequest} from './services/RestService'

class About extends React.Component{
    render(){
        return <h2>О сайте</h2>;
    }
}
class NotFound extends React.Component{
    render(){
        return <h2>Ресурс не найден</h2>;
    }
}

class Main extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            prefix: "",
            suffix: "",
        }
    }



    componentDidMount() {
        const successCallback = function(response) {
            this.setState({
                isLoaded: true,
                prefix: response.prefix,
                suffix: response.suffix
            });
        }.bind(this);

        const errorCallback = function(response) {
            this.setState({
                isLoaded: true,
                error: response
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/test");
    }

    render(){
        return (
            <div>
                <h2>Главная</h2>
                <Link to='/about'>Home</Link>
                <div>{this.state.prefix}</div>
                <div>{this.state.suffix}</div>
            </div>
        );
    }
}

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>,
    document.getElementById('root'));
