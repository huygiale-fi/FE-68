import React, { Component } from 'react'
import './styleCar.css';
import data from '../data/Features.json'
import data2 from '../data/wheel.json'
export default class BTCar extends Component {
    
    mangdata2 = data2;
    mangdata = data;


    constructor(props) {
        super(props);
        this.state = {
            mangxe: this.mangdata[0],
        }
    }


    changecolor = mangxe =>{
        this.setState({
            mangxe
        })

    }
    changewheel = banhxe =>{
        let mangxecapnhat = {...this.state.mangxe}
        mangxecapnhat.srcImg = banhxe;
        this.setState({
            mangxe:mangxecapnhat
        })
    }

    
    render() {
        const {changecolor,changewheel} = this;
        const {mangdata,mangdata2} = this;
        const {mangxe} = this.state;
        return (
            
            <div className="container">
                <h3 className="text-center">Exterior Color Car</h3>
                <div className="row">
                    <div className="col-7">
                        {/* {mangxe.map((sp,index)=>{
                            return(<img src={sp.wheels[2].srcImg} alt="" style={{ width: "700px" }} />
                            )
                        })} */}
                        <img src={mangxe.srcImg} alt="" style={{ width: "700px" }}/>
                    </div>

                    <div className="card col-5" style={{ width: '18rem' }}>
                        <div className="card-header">
                            Exterior Color
                        </div>
                        <ul className="list-group list-group-flush">
                            
                            <li className="list-group-item activee" onClick={()=>changecolor(mangdata[0])}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="image/imagecar/icons/icon-black.jpg" style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">Crystal BLack</div>
                                </div>
                            </li>
                            <li className="list-group-item" onClick={()=>changecolor(mangdata[1])}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="image/imagecar/icons/icon-steel.jpg" style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">Modern Steel</div>
                                </div>
                            </li>
                            <li className="list-group-item" onClick={()=>changecolor(mangdata[2])}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="image/imagecar/icons/icon-silver.jpg" style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">Lunar Silver</div>
                                </div>
                            </li>
                            <li className="list-group-item" onClick={()=>changecolor(mangdata[3])}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src="image/imagecar/icons/icon-red.jpg" style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">Rallye Red</div>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
                <div className="row">
                    <div className="card col-7">
                        <div className="card-header">
                        Exterior Color
                        </div>
                        <h4 className="text-left">SEE MORE LX Features</h4>
                        <div>
                            <ul className="list-group list-group-horizontal">
                                <li className="list-group-item">Color</li>
                                <li className="list-group-item">{mangxe.color}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-sm">
                                <li className="list-group-item">Price</li>
                                <li className="list-group-item">{mangxe.price}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-md">
                                <li className="list-group-item">Engine Type</li>
                                <li className="list-group-item">{mangxe.engineType}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-lg">
                                <li className="list-group-item">Displacement</li>
                                <li className="list-group-item">{mangxe.displacement}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-xl">
                                <li className="list-group-item">Horsepower</li>
                                <li className="list-group-item">{mangxe.horsepower}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-xl">
                                <li className="list-group-item">Torque</li>
                                <li className="list-group-item">{mangxe.torque}</li>
                            </ul>
                            <ul className="list-group list-group-horizontal-xl">
                                <li className="list-group-item">Redline</li>
                                <li className="list-group-item">{mangxe.redline}</li>
                            </ul>
                        </div>

                    </div>

                    <div className="card col-5" style={{ width: '18rem' }}>
                        <div className="card-header">
                            Exterior Color
                        </div>
                        <ul className="list-group list-group-flush">

                            <li className="list-group-item" onClick={()=>{changewheel(mangxe.wheels[0].srcImg)}}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src={mangdata2[0].img} style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">{mangdata2[0].title} <div>{mangdata2[0].price}</div></div>
                                </div>
                            </li>
                            <li className="list-group-item" onClick={()=>{changewheel(mangxe.wheels[1].srcImg)}}>
                                <div className="row">
                                    <div className="col-2">
                                        <img src={mangdata2[1].img} style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">{mangdata2[1].title} <div>{mangdata2[1].price}</div></div>
                                </div>
                            </li>
                            <li className="list-group-item" onClick={()=>{changewheel(mangxe.wheels[2].srcImg)}} >
                                <div className="row">
                                    <div className="col-2">
                                        <img src={mangdata2[2].img} style={{ width: "60px" }} />
                                    </div>
                                    <div className="col-9">{mangdata2[2].title} <div>{mangdata2[2].price}</div></div>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
