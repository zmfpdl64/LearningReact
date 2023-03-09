import React, { Component } from 'react';
import './App.css';
import TOC from './components/TOC';
import Subject from './components/Subject';
import ReadContent from './components/ReadContent';
import CreateContent from './components/CreateContent';
import Footer from './components/Footer';
import Control from './components/Control';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: "create",
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
      },
      selected_content_id:2
    }
  }

  render() {
    var _title, _desc = null;
    var _article = null;
    if(this.state.mode==='welcome'){
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode==='read'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id){
          console.log(data)
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i+=1
      }
    }else if(this.state.mode === 'create'){
      _article = <CreateContent></CreateContent>
    }

    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function() {
            if(this.state.mode === 'welcome'){
              this.setState({
                mode : "read"
              });
            }else{
              this.setState({
                mode : 'welcome'
              });
            }
          }.bind(this)}
          >
        </Subject>
        <TOC onChangePage={function(id) {
          this.setState({
            mode : 'read',
            selected_content_id:Number(id)
          })
        }.bind(this)} 
        data={this.state.contents}></TOC>
        <Control onChangeMode={function(_mode) {
          this.setState({mode:_mode});
          if(_mode === 'create'){
            this.setState({mode: _mode})
          }else if(_mode === 'update'){
            this.setState({mode: _mode})
          }else if(_mode === 'delete'){
            this.setState({mode: _mode})
          }
        }.bind(this)}></Control>
        {_article}
        <Footer msg={this.state.footer.msg}></Footer>
      </div>
    );
  }
}
export default App;
