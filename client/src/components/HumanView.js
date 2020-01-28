import React from 'react';
import {getRequest} from '../services/RestService';


class HumanView extends React.Component {

    constructor(props) {
        super(props);
        this.id = props.match.params.id;
        this.state = {
            title: "Create entity",
            name: ""
        };

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(event) {
        this.setState({name: event.target.value});
    }

    componentDidMount() {
        if (this.id === 'new') {
            return;
        }

        this.setState({title: "Edit entity"});
        const successCallback = function(human) {
            this.setState({
                isLoaded: true,
                human: human
            });
        }.bind(this);

        const errorCallback = function(resp) {
            this.setState({
                isLoaded: true,
                error: resp
            });
        }.bind(this);

        getRequest(successCallback,errorCallback, "/rest/humans/" + this.id);
    }

    render() {
        return (
            <div className="human-view">
                <div className="title">{this.state.title}</div>
                <div className="human-view-body">
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}/>
                </div>
            </div>
        )
    }
}

export default HumanView;