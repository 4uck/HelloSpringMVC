import React from 'react';
import HumansTable from "./humansTable/MasterComponent";

class App extends React.Component {
    render() {
        return (
            <div className="root-component">
                <div className="title">List of humans</div>
                <HumansTable/>
            </div>
        )
    }
}

export default App;