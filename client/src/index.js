import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App'
import HumanView from './components/HumanView'
import SecretAuthComponent from './components/SecretAuthComponent'
import RightUpToast from './components/RightUpToast'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import {getRequest} from './services/RestService'
import {setAuthInfo} from "./services/UserService";

class About extends React.Component{
    render() {
        return (
            <div><h3>About</h3></div>
        )
    }
}

class RootComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authInfoLoaded: false,
        };
    }

    componentDidMount() {
        const successCallback = async function(response) {
            let authInfo = await response.json();
            setAuthInfo(authInfo);
            this.setState({
                authInfoLoaded: true
            })
        }.bind(this);

        const errorCallback = function(response) {
            console.log("ERROR", response);
            this.setState({
                authInfoLoaded: true
            })
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/auth/getAuth");
    }

    render() {
        return (
            <BrowserRouter>

                <RightUpToast />

                { this.state.authInfoLoaded &&
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/about" component={About}/>
                        <Route path="/human/:id" component={HumanView}/>
                        <Route path="/auth" component={SecretAuthComponent}/>
                    </Switch>
                }
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
