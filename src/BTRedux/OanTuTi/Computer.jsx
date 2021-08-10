import React, { Component } from 'react'
import { connect } from 'react-redux'

 class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomitem${Date.now()}{
            0% {top:150px}
            25% {top:0}
            50% {top:150px}
            75% {top:0}
            100% {top: 0}
        }`
        const {computer} = this.props;
        return (
            <div>
                <style>{keyframe}</style>
                <div className="text-center test mt-2">
                <div className="banchon" style={{position:"relative"}}>
                    <img src={computer.img} alt="" style={{position:"absolute",left:"15%",animation:`randomitem${Date.now()} 0.5s`,width:"100px",height:"100px"}} />
                </div>
                <div className="speech-bubble"></div>
                </div>
                <img src="./image/OanTuTi/playerComputer.png" alt="" style={{width:"200px",height:"200px"}}/>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        computer:state.OanTuTiReducer.computer,
    }
}

export default connect(mapStateToProps)(Computer)