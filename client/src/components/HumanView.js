import React from 'react';
import {getRequest, postRequest} from '../services/RestService';
import { withRouter } from 'react-router-dom'



class HumanView extends React.Component {

    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            title: "Create entity",
            value: "",
            human: {
                sex: "MALE",
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSaveBtnClick = this.handleSaveBtnClick.bind(this);
        this.handleRemoveBtnClick = this.handleRemoveBtnClick.bind(this);
    }

    handleChange(event, field) {
        let value = event.target.value;
        this.setState(prevState => {
            let human = Object.assign({}, prevState.human);
            human[field] = value;
            return { human };
        })
    }

    handleSaveBtnClick() {
        console.log("human", this.state.human);
        const successCallback = function(response) {
            // TODO
            console.log("SUCCESS SAVE");
            this.props.history.push('/');
        }.bind(this);

        const errorCallback = function(response) {
            // TODO
            console.log("ERROR SAVE");
        }.bind(this);

        postRequest(successCallback, errorCallback, "/rest/humans/save", this.state.human);
    }

    handleRemoveBtnClick() {
        console.log("human", this.state.human);
        const successCallback = function(response) {
            // TODO
            console.log("SUCCESS REMOVE");
            this.props.history.push('/');
        }.bind(this);

        const errorCallback = function(response) {
            // TODO
            console.log("response: ", response);
            console.log("ERROR REMOVE");
        }.bind(this);

        getRequest(successCallback, errorCallback, "/rest/humans/remove/" + this.state.human.id);
    }

    componentDidMount() {
        if (this.id === 'new') {
            return;
        }

        this.setState({title: "Edit entity"});
        const successCallback = async function(response) {
            this.setState({
                isLoaded: true,
                human: await response.json()
            });
        }.bind(this);

        const errorCallback = function(response) {
            this.setState({
                isLoaded: true,
                error: response
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/humans/" + this.id);
    }

    render() {
        return (
            <div className="human-view">
                <div className="title">{this.state.title}</div>
                <div className="human-view-body">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Введите имя" value={this.state.human.name} onChange={event => this.handleChange(event, 'name')}/>
                    </div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Введите город региастрции" value={this.state.human.registrationCity} onChange={event => this.handleChange(event, 'registrationCity')}/>
                    </div>
                    <select className="custom-select" value={this.state.human.sex} onChange={event => this.handleChange(event, 'sex')}>
                        <option value="MALE">Мужской</option>
                        <option value="FEMALE">Женский</option>
                    </select>
                </div>
                <button type="button" className="btn btn-danger" onClick={this.handleRemoveBtnClick}>Удалить</button>
                <button type="button" className="btn btn-primary" onClick={this.handleSaveBtnClick}>Сохранить</button>
            </div>
        )
    }
}

export default withRouter(HumanView);