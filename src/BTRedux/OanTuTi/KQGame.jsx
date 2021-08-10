import React, { Component } from 'react'
import { connect } from 'react-redux'

 class KQGame extends Component {
    render() {
        const { ketqua,thang,lanchoi} = this.props;
        return (
            <div className="text-center mt-5">
                <h3 className="text-secondary mt-2">{ketqua}</h3>
                <h3 className="text-secondary mt-3">Số bàn Thắng: <span className="text-light">{thang}</span></h3>
                <h3 className="text-secondary mt-3">Số bàn Chơi: <span className="text-light">{lanchoi}</span></h3>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        thang:state.OanTuTiReducer.thang,
        lanchoi:state.OanTuTiReducer.lanchoi,
        ketqua:state.OanTuTiReducer.ketqua,
    }
}

export default connect(mapStateToProps,null)(KQGame)