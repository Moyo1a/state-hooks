import React, { Component } from 'react'

class IntervalClass extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    componentDidMount() {
        this.Interval= setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.tick)
    }

    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (

            <h2>{this.state.count}</h2>

        )
    }
}

export default IntervalClass