import React, { Component } from 'react';

class UpdateContent extends Component{
  constructor(props) {
    super(props);
    this.state={
      title: this.props.title,
      desc: this.props.desc
    }
    this.InputFormHandler = this.InputFormHandler.bind(this);
  };
  InputFormHandler(e) {
    this.setState({[e.target.name]: e.target.value});
  }
    render() {
      var _title = this.state.title;
      var _desc = this.state.desc;
      return (
        <article>
          <h2>Update</h2>
          <form action="/create_process" method="post"
            onSubmit={function(id, e) {
              e.preventDefault();
              this.props.updateContent(
                id, 
                e.target.title.value,
                e.target.desc.value
              );
            }.bind(this, this.props.updateId)}
          >
            <p><input type="text" name="title"  placeholder="title" value={_title}
            onChange={this.InputFormHandler}
            >
              </input></p>
            <p><textarea name="desc" placeholder="description"
            value={_desc}
            onChange={this.InputFormHandler}
            >
              </textarea></p>
            <p><input type='submit'></input></p>
          </form>
        </article>
      );
    }
  }
  export default UpdateContent;