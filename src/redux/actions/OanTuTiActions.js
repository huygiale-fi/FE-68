
import * as OanTuTiConstants from '../constants/OanTuTiConstants'

export const chon = (machon)=>{
    return{
        type:OanTuTiConstants.CHON_MA,
        machon
    }
}
export const random = ()=>{
    return{
        type:OanTuTiConstants.RAN_DOM,
    }
}
export const endgame = ()=>{
    return{
        type:OanTuTiConstants.PLAY_GAME_OANTUTI,
    }
}