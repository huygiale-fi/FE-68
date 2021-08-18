
import React, { Component } from 'react'

export default class Question1 extends Component {
    state = {
        exact: ''
    }
    handleChange = event => {
        const { name, value } = event.target;
        if (value === 'Đất')
            this.setState({
                [name]: value,
            });
    };

    renderdsquestion = () => {
        const { listquestion } = this.props;
        const listquestion1 = listquestion.filter(item => item.questionType === 1);
        return listquestion1.map((ques) => {
            return <form key={ques.id}><div >
                <h3>{ques.id}. {ques.content}</h3>
                {ques.answers.map(ans => {
                    return <div><input
                        id={ans.id}
                        value={ans.content}
                        exact={ans.exact}
                        name="answers"
                        type="radio"
                        onChange={this.handleChange}
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
