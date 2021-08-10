
import * as OanTuTiConstants from '../constants/OanTuTiConstants'

const stateTuTi = {
    mangdat: [{ma:'keo',img:'./image/OanTuTi/keo.png',chon:false},
    {ma:'bua',img:'./image/OanTuTi/bua.png',chon:true},
    {ma:'bao',img:'./image/OanTuTi/bao.png',chon:false},],
    thang:0,
    lanchoi:0,
    ketqua:'Please Play Game',
    computer:{ma:'keo',img:'./image/OanTuTi/keo.png',chon:true}
}


const OanTuTiReducer = (state=stateTuTi,action)=>{
    switch(action.type){
        case OanTuTiConstants.CHON_MA:{
            let mangcapnhat = [...state.mangdat];
            mangcapnhat = mangcapnhat.map((item,index)=>{
                if(item.ma === action.machon){
                    return {...item,chon:true}
                }
                return{...item,chon:false}
            })
            return {...state,mangdat:mangcapnhat};
        }
        case OanTuTiConstants.RAN_DOM:{
            let sorandom = Math.floor(Math.random()*3);
            let computercapnhat = state.mangdat[sorandom];
            return{...state, computer:computercapnhat};
        }
        case OanTuTiConstants.PLAY_GAME_OANTUTI:{
            let player = state.mangdat.find(item=>item.chon === true);
            let computer = state.computer;
            console.log(player);
            switch(player.ma){
                case 'keo':
                    if(computer.ma === 'keo'){
                        state.ketqua = 'Hòa Nhau !!!'
                    }else if(computer.ma === 'bua'){
                        state.ketqua = "Bạn Thua !!!"
                    }else{
                        state.ketqua = "Bạn Thắng !!!"
                        state.thang += 1;
                    }
                    break;
                case 'bua':
                    if(computer.ma === 'keo'){
                        state.ketqua = "Bạn Thắng !!!"
                        state.thang += 1;
                    }else if(computer.ma === 'bua'){
                        state.ketqua = 'Hòa Nhau !!!'
                    }else{
                        state.ketqua = "Bạn Thua !!!"
                    }
                    break;
                case 'bao':
                    if(computer.ma === 'keo'){
                        state.ketqua = "Bạn Thua !!!"
                    }else if(computer.ma === 'bua'){
                        state.ketqua = 'Bạn Thắng !!!'
                        state.thang += 1;
                    }else{
                        state.ketqua = "Hòa Nhau !!!"
                    }
                    ;break;
                    default: state.ketqua = 'Bạn Thắng !!!'
            }
            state.lanchoi += 1;
            return {...state}
        }
        default: return {...state}
    }
    
}

export default OanTuTiReducer;