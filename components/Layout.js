import React, { Component } from 'react'
import Header from './Header'

class Layout extends Component {
  constructor (props){
    super(props);
    this.state = {}
    console.log(this.props)
  }

  render () {
    return (
      <div>
        <Header />
        <div className="layout">
          {this.props.children}
        </div>
      </div>
    )
  }
}
export default Layout;
