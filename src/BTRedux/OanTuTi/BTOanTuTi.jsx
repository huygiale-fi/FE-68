import React, { Component } from 'react'
import { connect } from 'react-redux'
import './BTOanTuTi.css'
import Computer from './Computer'
import KQGame from './KQGame'
import Player from './Player'
import {random,endgame} from '../../redux/actions/OanTuTiActions'
 class BTOanTuTi extends Component {
    render() {
        const {playgame} = this.props;
        return (
            <div className="background-game">
                <div className="container" style={{marginTop:"30px"}}>
                    <div className="row">
                        <div className="col-4">
                            <Player/>
                        </div>
                        <div className="col-4">
                            <KQGame/>
                            <button className="btn btn-success" onClick={()=>playgame()}>Play Game</button>
                        </div>
                        <div className="col-4">
                            <Computer/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch=>{
    return{
        playgame:()=>{
            let count = 0;
            let randomcomputer = setInterval(()=>{
                dispatch(random());
                count++;
                if(count > 30){
                    clearInterval(randomcomputer);
                    dispatch(endgame());
                }
            },100)
            
            
        }
    }
}

export default connect(null,mapDispatchToProps)(BTOanTuTi)