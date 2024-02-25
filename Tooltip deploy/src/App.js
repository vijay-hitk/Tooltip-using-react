import React from 'react';
import './App.css';
import Tooltip from './tooltip';

class App extends React.Component{

  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }
  //this function handle the position
  handleClick=(pos)=>{
    this.setState({
      position:pos,
    })
  };


  //this function handle the hovering in


  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };



    //this function  handle the hovering out


  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }




  render(){
    return (


      <div >

  {/* //position of the all button */}

        <div >

          <div className='select'>
            Select the position of the hovering!!
          </div>

          <div className='btn-container'>
          <button
          className= {this.state.position=== 'top' ? "btn-active" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            top
          </button>

          <button
          className={this.state.position=== 'right' ? "btn-active" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            right
          </button>


          <button
          className={this.state.position=== 'left' ? "btn-active" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            left
          </button>

          <button
          className={this.state.position=== 'bottom' ? "btn-active" :"btn"}
          onClick={(e)=>{
            this.handleClick('bottom');
          }}>
            bottom
          </button>
        </div>
        </div>

       <div >
          <button
          className=' hover-btn'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
          >

            Hover Over Me!!
          </button>
          {this.state.hovering && <Tooltip position={this.state.position}/>}
        </div>


      </div>
    );
  }
}

export default App;