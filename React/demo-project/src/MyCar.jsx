import React, { Component } from 'react'
// rcc - class based component

export default class MyCar extends Component {
  constructor(){
    super()
    this.state={
      carName:"Polo GT"
    }
  }
  render() {
    return (
      <div style={{minHeight:"50vh"}} className='p-5 bg-warning rounded'>
        <input onChange={e=>this.setState({...this.state,carName:e.target.value})} type="text" className='form-control' />
        <h1>My Car is: <span className='fw-bolder'>{this.state.carName}</span></h1>
      </div>
    )
  }
}
