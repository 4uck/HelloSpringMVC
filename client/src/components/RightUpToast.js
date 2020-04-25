import React from 'react';
import {setCallback} from "../services/ToastService";
import Toast from 'react-bootstrap/Toast'

class RightUpToast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showToast: false
        };

        this.showToast = this.showToast.bind(this);
        this.hideToast = this.hideToast.bind(this);

        setCallback(this.showToast);
    }

    showToast(message) {
        this.setState({
            message: message,
            showToast: true
        })
    }

    hideToast() {
        this.setState({
            showToast: false
        })
    }

    render() {
        return (
        <div
            style={{
                position: 'absolute',
                top: '20px',
                right: '20px'
            }}
        >
            <Toast show={this.state.showToast} onClose={this.hideToast} delay={3000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Внимание</strong>
                </Toast.Header>
                <Toast.Body>{this.state.message}</Toast.Body>
            </Toast>
        </div>
        )
    }
}

export default RightUpToast;