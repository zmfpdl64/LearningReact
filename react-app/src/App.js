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
      contents: [
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'Css is for Design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for intensive'},
      ]
      ,
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
        <TOC data={this.state.contents}></TOC>
        <Content date={this.state.contents}></Content>
        <Footer msg={this.state.footer.msg}></Footer>
      </div>
    );
  }
}
export default App;
