import React from "react";
import "./App.css";
import "./App";

export default class Tooltip extends React.Component{
   


    render(){
        const {position} = this.props;
        return(<>
            <div className={position}>
                <span className="tooltip">  Thanks for Hovering ! i am a Tooltip.</span>
            </div>
        </>)
    }

}