import React from 'react'
import {getRequest, postRequest} from '../../services/RestService'
import {TableHead, TableBody} from './SlaveComponents'
import { Link, withRouter } from 'react-router-dom'
import {showToast} from "../../services/ToastService";
import {isAdmin} from "../../services/UserService"

class MasterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            humans: [],
        };

        this.handleClick = this.handleClick.bind(this);
        this.getSexTranslation = this.getSexTranslation.bind(this);
    }

    handleClick(id) {
        if (isAdmin()) {
            this.props.history.push('/human/' + id);
        } else {
            showToast();
        }
    }

    getSexTranslation(sex) {
        switch (sex) {
            case "FEMALE": return "Женский";
            case "MALE": return "Мужской";
        }
    }

    componentDidMount() {
        const successCallback = async function(response) {
            this.setState({
                isLoaded: true,
                humans: await response.json()
            });
        }.bind(this);

        const errorCallback = function(resp) {
            this.setState({
                isLoaded: true,
                error: resp.status
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/humans");
    }

    render() {
        return (
            <div className="table-component">
                {isAdmin() && <div className="new-human-btn-wrapper"><Link to='/human/new' className="btn btn-primary">Добавить</Link></div>}
                <table className="table table-hover">
                    <TableHead/>
                    <TableBody humans={this.state.humans} handleClick={this.handleClick} getSexTranslation={this.getSexTranslation}/>
                </table>
            </div>
        )
    }
}

export default withRouter(MasterComponent);