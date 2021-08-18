import React, { Component } from 'react'
import Question1 from './Question1'
import Question2 from './Question2'
import axios from 'axios'
import { get } from 'jquery'
export default class BTCheckOnline extends Component {
    state = {
        listquestion: []
    }
    componentDidMount() {
        axios('https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions', get)
            .then((res) => {
                console.log(res.data)
                this.setState({
                    listquestion: res.data
                })
            }).catch((err) => {
                console.log(err)
            })
    }
    render() {
        return (
            <div>
                <Question1 listquestion={this.state.listquestion} />
                <Question2 listquestion={this.state.listquestion} />
            </div>
        )
    }
}
