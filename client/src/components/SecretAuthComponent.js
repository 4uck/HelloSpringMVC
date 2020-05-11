import React from 'react';
import { withRouter } from 'react-router-dom'
import {getRequest} from "../services/RestService";
import {setAuthInfo} from "../services/UserService";

class SecretAuthComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            authorizedStatus: 0
        }
    }

    componentDidMount() {
        const successCallback = async function(response) {
            let authInfo = await response.json();
            setAuthInfo(authInfo);
            this.setState({
                authorizedStatus: 1
            });
        }.bind(this);

        const errorCallback = function(response) {
            console.log("ERROR", response);
            this.setState({
                authorizedStatus: 2
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/auth/secretAuth");
    }

    render() {
        return (
            <div>
                { this.state.authorizedStatus === 1 &&
                    <div>
                        Успешно авторизован.
                        <a href="/"> Перейти на главную страницу</a>
                    </div>
                }

                { this.state.authorizedStatus === 2 &&
                    <div>
                        Что то пошло не так
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(SecretAuthComponent);