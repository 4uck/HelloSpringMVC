import React from 'react'
import {getRequest} from '../../services/RestService'
import {TableHead, TableBody} from './SlaveComponents'
import { Link } from 'react-router-dom'

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
        console.log('open new page', id);
    }

    getSexTranslation(sex) {
        switch (sex) {
            case "FEMALE": return "Женский";
            case "MALE": return "Мужской";
        }
    }

    componentDidMount() {
        const successCallback = function(humans) {
            this.setState({
                isLoaded: true,
                humans: humans
            });
        }.bind(this);

        const errorCallback = function(resp) {
            this.setState({
                isLoaded: true,
                error: resp
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/humans");
    }

    render() {
        return (
            <div className="table-component">
                <div className="new-human-btn-wrapper"><Link to='/human/new' className="btn btn-primary">Добавить</Link></div>
                <table className="table table-hover">
                    <TableHead/>
                    <TableBody humans={this.state.humans} handleClick={this.handleClick} getSexTranslation={this.getSexTranslation}/>
                </table>
            </div>
        )
    }
}

export default MasterComponent;