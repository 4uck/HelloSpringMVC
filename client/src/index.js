import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HumansTable from './components/humansTable/MasterComponent'
import 'bootstrap/dist/css/bootstrap.css';

class RootComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            humans: [],
        }
    }

    render() {
        return (
            <div className="root-component">
                <div className="title">List of humans</div>
                <HumansTable humans={this.state.humans}/>
            </div>
        );
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
