import { Component } from "react";
import React from "react";

class Follow extends Component {
    constructor() {
        super()
        this.state = {
            message: "Follow Me!"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thanks for following me!"
        })
    }

    resetMessage() {
        this.setState({
            message: "Follow Me!"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Follow</button>
                <button onClick={() => this.resetMessage()}>Back</button>
            </div>
        )
    }
}

export default Follow;