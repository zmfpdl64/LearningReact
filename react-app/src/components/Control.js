import React, { Component } from 'react';

class Control extends Component {
    render() {
      return (
        <ul>
          <li><a href="/create" 
          onClick={function(mode, e) {
            e.preventDefault();
            this.props.onChangeMode(mode)
          }.bind(this, "create")}
          >create</a></li>
          <li><a href="/update"
            onClick={function(mode, e) {
            e.preventDefault();
            this.props.onChangeMode(mode)
            }.bind(this, "update")}
          >update</a></li>
          <li><input type="button" value="delete"
            onClick={function(mode, e) {
                e.preventDefault();
                this.props.onChangeMode(mode)
                }.bind(this, "delete")}
          ></input></li>
        </ul>
      );
    }
  }
  export default Control;