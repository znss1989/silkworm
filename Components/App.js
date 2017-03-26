import React from 'react'
// import {connect} from 'react-redux'
import Header from './Header'
import Plans from './Plans'
import Nodes from './Nodes'
import Footer from './Footer'

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header />
                <Plans />
                <Nodes />
                <Footer />
            </div>
        );
    }
}

export default App;