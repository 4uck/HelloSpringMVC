import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
        return (
            <button className="square">
            {/* TODO */}
            </button>
    );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
            <div className="status">{status}</div>
            <div className="board-row">
            {this.renderSquare(0)}
        {this.renderSquare(1)}
        {this.renderSquare(2)}
    </div>
        <div className="board-row">
            {this.renderSquare(3)}
        {this.renderSquare(4)}
        {this.renderSquare(5)}
    </div>
        <div className="board-row">
            {this.renderSquare(6)}
        {this.renderSquare(7)}
        {this.renderSquare(8)}
    </div>
        </div>
    );
    }
}

class RootComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            humans: [],
        }
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.humans.map((human) =>
                        <li>{human.name}</li>
                    )}
                </ul>
                <div className="root-component">Hello world</div>
            </div>
        );
    }

    componentDidMount() {
        fetch("/rest/humans/all")
            .then(res => res.json())
            .then((humans) => {
                    this.setState({
                        isLoaded: true,
                        humans: humans
                    });
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    console.log("ERROR");
                }
            )
    }
}

ReactDOM.render(<RootComponent />, document.getElementById('root'));
