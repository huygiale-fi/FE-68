import React, { Component } from 'react'

export default class BTGlasses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            img: ''
        }
    }

    changeglasses = img =>{
        this.setState({
           img,
        })
    }



    render() {
        const {img} = this.state;
        return (
            <div style={{ backgroundImage: `url("./image/glasses/background.jpg")`, backgroundRepeat: "no-repeat",backgroundSize: "100%",backgroundPosition: "center"}}>
                <h3 className="text-center" style={{ background: "rgba(0, 0, 0, 0.5)", color: "white", padding: "20px 0px" }}>TRY GLASSES APP ONLINE</h3>
                <div><img src="./image/glasses/model.jpg" style={{position: "relative",width: "300px",border:"2px solid #efefef"}} />
                <img src={img} width="178px" style={{position:"absolute",top:"171px",left: "639px"}}/>
                
                </div>
                <div style={{background:"white",width:"1000px",margin:"0 auto", boxShadow: "3px 3px 3px 3px #efefef"}}>
                    <ul >
                        <li onClick={()=>this.changeglasses('./image/glasses/v1.png')} style={{display:"inline-block", margin:"5px",border:"2px solid #888888",cursor:"pointer"}}><img  src="./image/glasses/v1.png"  width="150px" /></li>
                        <li style={{display:"inline-block", margin:"5px" ,border:"2px solid #888888",cursor:"pointer"}} onClick={()=>this.changeglasses('./image/glasses/v2.png')}><img src="./image/glasses/v2.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses("./image/glasses/v3.png")} style={{display:"inline-block", margin:"5px" ,border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v3.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses('./image/glasses/v4.png')} style={{display:"inline-block", margin:"5px" ,border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v4.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses('./image/glasses/v5.png')} style={{display:"inline-block", margin:"5px" ,border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v5.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses('./image/glasses/v6.png')} style={{display:"inline-block", margin:"5px" ,border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v6.png"  width="150px" /></li>
                    </ul>
                    <ul>
                        <li onClick={()=>this.changeglasses('./image/glasses/v7.png')} style={{display:"inline-block", margin:"5px",border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v7.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses('./image/glasses/v8.png')} style={{display:"inline-block", margin:"5px",border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v8.png"  width="150px" /></li>
                        <li onClick={()=>this.changeglasses('./image/glasses/v9.png')} style={{display:"inline-block", margin:"5px",border:"2px solid #888888",cursor:"pointer"}}><img src="./image/glasses/v9.png"  width="150px" /></li>
                    </ul>
                </div>

            </div>
        )
    }
}
