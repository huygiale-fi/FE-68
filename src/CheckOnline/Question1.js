import axios from 'axios'
import { get } from 'jquery'
import React, { Component } from 'react'

export default class Question1 extends Component {
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

    renderdsquestion = () => {
        const listquestion1 = this.state.listquestion.filter(item => item.questionType === 1);
        return listquestion1.map((ques) => {
            return (<div key={ques.id}>
                <h3>{ques.id}. {ques.content}</h3>
            </div>
            )
        })
    }
    renderdsanswers = () => {
        let listquestion1 = this.state.listquestion.filter(item => item.questionType === 1);
        return listquestion1.map((ques) => {
            return ques.answers.map((ans) => {
                return <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id={ans.id} />
                    <label className="form-check-label" htmlFor={ans.id}>
                        {ans.content}
                    </label>
                </div>
            })
        })
    }
    render() {
        return (
            <div>
                {this.renderdsquestion()}
                {this.renderdsanswers()}
            </div>
        )
    }
}
