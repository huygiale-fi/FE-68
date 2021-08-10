import React, { Component } from 'react'
import {connect} from 'react-redux'
import {chon} from '../../redux/actions/OanTuTiActions'
class Player extends Component {
    render() {
        const {mangdatcuoc,chon} = this.props;
        return (
            <div>
                <div className="text-center test mt-2">
                <div className="banchon">
                    <img src={mangdatcuoc.find(item=>item.chon === true).img} alt="" style={{width:"100px",height:"100px"}} />
                </div>
                <div className="speech-bubble"></div>
                </div>
                <img src="./image/OanTuTi/player.png" alt="" style={{width:"200px",height:"200px"}}/>
                <div className="row">
                    {mangdatcuoc.map((item,index)=>{
                        let border={};
                        if(item.chon){
                            border= {border: '4px solid #45D994'}
                        }

                        return(
                            <div key={index} className="col-4 ">
                        <button onClick={()=>chon(item.ma)} style={border} className="btn-image">
                        <img src={item.img} style={{width:"50px",height:"50px"}} /> 
                        </button>
                    </div>
                        )  
                    })}
                   
                    
                </div>
            </div>
        )
    }
}
const mapStateToProps = state =>{
    return{
        mangdatcuoc:state.OanTuTiReducer.mangdat,
    }
}
const mapDispatchToProps = dispatch=>{
    return{
        chon:(machon)=>{
            dispatch(chon(machon));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Player)