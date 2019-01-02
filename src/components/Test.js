import React, { Component } from 'react';
import { connect } from "react-redux";
import * as ActionTest from './../actions/action.test'

class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {
            test: "thang"
        }
    }

    onclick = (e) => {
        this.props.actionCreateUser()
        console.log("thangtm");
        
    }
    render() {
        console.log("thangtm ", this.props);
        return (
            <div>
                <p>TEST</p>
                <button onClick={this.onclick}>Click</button>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log("before change: ", state.test);

    return {
        data: state.test
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        actionCreateUser: () => {
            dispatch(ActionTest.actionTest())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
