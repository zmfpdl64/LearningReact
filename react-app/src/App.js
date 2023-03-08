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
      mode: "read",
      subject:{title:"Web", sub:"Wolrd wide Web"},
      welcome:{title:"Welcome", desc:"Hello, React!!"},
      contents: [
        {id:1, title:'HTML', desc:'HTML is HyperText Markup Language'},
        {id:2, title:'CSS', desc:'Css is for Design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for intensive'},
      ]
      ,
      content:{title:'HTML', desc:'HTML is HyperText Markup Langauge'}
      ,
      footer:{
        msg: "i'm Footer"
      }
    }
  }

  render() {
    var _title, _desc = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;

    }else if(this.state.mode==='read'){
      _title = this.state.content.title
      _desc = this.state.content.desc;
    }

    return (
      <div className="App">
        {/* <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}>
        </Subject> */}
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
            // this.state.mode='welcome'; // 여기서의 this는 어떤것도 가리키지 않는 상태이다.
            if(this.state.mode === 'welcome'){
              this.setState({
                mode:'read'
              });
            }else{
              this.setState({
                mode:'welcome'
              });
            }

          }.bind(this)}>{this.state.subject.title}</a></h1> 
          {this.state.subject.sub}
        </header>
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
        <Footer msg={this.state.footer.msg}></Footer>
      </div>
    );
  }
}
export default App;
