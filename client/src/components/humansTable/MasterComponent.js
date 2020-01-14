import React from 'react'
import {getHumans} from '../../services/HumansService'
import {TableHead, TableBody} from './SlaveComponents'

class MasterComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            humans: [],
        };
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

        getHumans(successCallback,errorCallback);
    }

    render() {
        return (
            <table className="table table-hover">
                <TableHead/>
                <TableBody humans={this.state.humans}/>
            </table>
        )
    }
}

export default MasterComponent;