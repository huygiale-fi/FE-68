import React, { Component } from 'react'

export default class Question2 extends Component {
    state = {
        Listanswers: [],
    }
    handleChange = (e, contenttrue, quesid) => {
        const { value } = e.target;
        console.log(value)
        let isexact = false;
        if (value === contenttrue) {
            isexact = true;
        }
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
        const listquestion2 = listquestion.filter(item => item.questionType === 2);
        return listquestion2.map((ques) => {
            return <form key={ques.id}>
                <h3>{ques.id}. {ques.content}</h3>
                {ques.answers.map(ans => {
                    return <input onChange={(e) => this.handleChange(e, ans.content, ques.id)} placeholder="Đáp Án Của Bạn">
                    </input>
                })}
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
