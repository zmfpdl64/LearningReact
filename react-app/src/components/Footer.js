import React, { Component } from 'react';
class Footer extends Component{
    render() {
      return (
        <div class="row">
          <div class="col-2"></div>
          <div class="col-8">
            <h1>{this.props.msg}</h1>
          </div>
          <div class="col-2"></div>
  
        </div>
      )
    }
  }
  export default Footer;