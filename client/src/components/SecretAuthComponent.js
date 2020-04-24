import React from 'react';
import { withRouter } from 'react-router-dom'
import {getRequest} from "../services/RestService";
import {setAuthInfo} from "../services/UserService";

class SecretAuthComponent extends React.Component {

    componentDidMount() {
        const successCallback = async function(response) {
            let authInfo = await response.json();
            setAuthInfo(authInfo);
            this.authInfoLoaded = true;
        }.bind(this);

        const errorCallback = function(response) {
            console.log("ERROR", response);
            this.authInfoLoaded = true;
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/auth/secretAuth");
    }

    render() {
        return (
            <div>
                {
                    this.authInfoLoaded &&
                    <div>Успешно авторизован</div>
                }
            </div>
        )
    }
}

export default withRouter(SecretAuthComponent);