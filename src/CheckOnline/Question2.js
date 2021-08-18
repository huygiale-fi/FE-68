import React, { Component } from 'react'

export default class Question2 extends Component {
    state = {
        dsdapan: {},

    }
    handleChange = (e, ans) => {

        const { value } = e.target;
        console.log(ans)
        console.log(value)
        this.setState({
            input: value
        })
    };

    renderdsquestion = () => {
        const { listquestion } = this.props;
        const listquestion2 = listquestion.filter(item => item.questionType === 2);
        return listquestion2.map((ques) => {
            return <form key={ques.id}>
                <h3>{ques.id}. {ques.content}</h3>
                {ques.answers.map(ans => {
                    return <input onChange={this.handleChange(ans)} placeholder="Đáp Án Của Bạn">
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
