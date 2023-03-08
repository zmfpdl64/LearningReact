import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import Content from './components/Content';
import Footer from './components/Footer';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      subject:{title:"Web", sub:"Wolrd wide Web"},
      content: {
        title:"HTML",
        desc: "HTML HyperText Markup Language."
      },
      footer:{
        msg: "i'm Footer"
      }

    }

  }

  render() {
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject>
        <TOC></TOC>
        <Content title={this.state.content.title} desc={this.state.content.desc}></Content>
        <Footer msg={this.state.footer.msg}></Footer>
      </div>
    );
  }
}

export default App;
