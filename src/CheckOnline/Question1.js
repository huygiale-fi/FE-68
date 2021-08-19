
import React, { Component } from 'react'

export default class Question1 extends Component {
    state = {
        Listanswers: [],
    }
    handleChange = (e, value, isexact, quesid) => {
        const playanswers = {
            questionID: quesid,
            content: value,
            check: isexact,
        }
        let mangcapnhat = [...this.state.Listanswers]
        let index = mangcapnhat?.findIndex(item => item.questionID === quesid)
        if (index !== -1) {
            mangcapnhat[index] = playanswers;
        } else {
            mangcapnhat.push(playanswers)
        }
        this.setState({
            Listanswers: mangcapnhat
        }, () => {
            console.log(this.state.Listanswers)
        })
    };

    renderdsquestion = () => {
        const { listquestion } = this.props;
        const listquestion1 = listquestion.filter(item => item.questionType === 1);
        return listquestion1.map((ques) => {
            return <form key={ques.id}><div>
                <h3>{ques.id}. {ques.content}</h3>
                {ques.answers.map(ans => {
                    return <div><input
                        name="answer"
                        type="radio"
                        onChange={(e) => this.handleChange(e, ans.content, ans.exact, ques.id)}
                    />
                        {ans.content}
                    </div>
                })}
            </div>
            </form>
        })
    }

    render() {
        return (
            <div>
                {this.renderdsquestion()}
            </div>
        )
    }
}
