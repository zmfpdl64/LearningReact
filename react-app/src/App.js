import React, { Component } from 'react';
import './App.css';

class Subject extends Component {
  render() {
    return (
      <header>
        <h1>Web</h1>
        world wide web!
      </header>
    );
  }
}

class TOC extends Component{
  render() {
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}

class Content extends Component{
  render() {
    return (
      <article>
        <h2>HTML</h2>
        HTML HyperText Markup Language.
      </article>
    );
  }
}

class Footer extends Component{
  render() {
    return (
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <h1>i'm Footer</h1>
        </div>
        <div class="col-2"></div>

      </div>
    )
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject></Subject>
        <TOC></TOC>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
