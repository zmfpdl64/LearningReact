<h2>LearningReact</h2>

# React의 장점

1. 가독성 증가
2. 재사용성 증가
3. 유지보수 증가


# 공부 순서

1. Coding 
2. Run
3. Deploy

# npm을 이용해서 create app을 만드는 방법

```
npm install -g create-react-app
sudo npm install -g create-react-app
mkdir react-app
cd ./react-app
create-react-app .
npm start

```

-g는 전역으로 설치하는 방법이다.

# npx를 이용해서 만드는 방법

최신버전의 라이브러리를 사용할 수 있게 해준다.

<br><br>

# 폴더 구조 파악

- public 
- src
- build

퍼블릭은 개발할 때 사용하는 환경이고
build는 사용자에게 배포했을 때 사용하는 폴더이다.
<br>
public은 react 개발 환경이 다 들어가 있기 때문에 매우 무겁다 그렇기에 build를 이용해서 배포한다.

<br>

# npm 개발 환경

- build
- public

<br>

# 실제로 서비스를 배포할 때는

build안의 파일들을 이용해서 배포해야한다.
<br><br>

# 서버 배포하는 방법

npm install -g serve

npx serve //1회용 서버

npx serve -s build

### 컴포넌트를 만드는 방법


```javascript
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>hello React</h1>
      </div>
    );
  }
}
```
위의 코드는 App이라는 클래스를 만들고 react의 Component라는 클래스를
상속받아서 render라는 함수를 이용해 전달하는 것이다.
render는 Component가 가지고 있는 함수이다.

## `주의사항`
컴포넌트는 하나의 최상위 태그만을 사용해야한다. 

EX) \<div> \</div> 이나  \<header> \</header>

리액트의 자바스크립트 문법으로 변환해주는 기능을 통해 \<div> 태그를 역슬래시 없이 그냥 사용할 수 있다.

# 컴포넌트 내용 변경하기

```javascript

// Subject 컴포넌트
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
// App 컴포넌트에서 Subject 컴포넌트 호출 
<Subject title="React" sub="For UI"></Subject>
```
props는 간단히 생각해 변수라고 생각하면 좋다. 여기에 값을 집어넣는 것이 state(값)

# 브라우저 개발 툴

- [리액트 개발자 도구](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

# state

사용자에게 알려줄 필요도 없고 알필요도 없는 것<br>
구현하기 위한 상태
사용자에게 감춰야한다.
<br><br>
state는 초기화 해주는 역할을 하고
props는 초기화 한 데이터를 내가 적재하고 싶은 곳에 데이터를 적재하는 역할을 한다.
- state의 상태가 변경되면 render함수가 다시 실행된다.

<br><br>

# 이벤트

```javascript
        <header>
          <h1><a href="/" onClick={function(e) {
            console.log(e);
            e.preventDefault();
          }}>{this.state.subject.title}</a></h1>
          {this.state.subject.sub}
        </header>
```
위의 코드에서 onClick 속성을 추가했으며 이것은 JavaScript와 유사하지만 조금 다르다.<br>
`e.preventDefault`는 리로딩하지 않게 해주는 메소드이다.
<br><br>
# 이벤트 발생시 state 변경
```javascript
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
```
- this를 그냥 사용하게 되면 아무것도 가리키지 않기 때문에 해당 함수 끝에 `.bind()`를 붙혀줘야한다.
- this를 사용해서 그냥 변경하게 되면 변경되지 않는다. 그렇기에 `setState()`함수를 이용해서 변경시켜야한다.
<br><br>

# bind 함수
바인드 함수는 정의되어있지 않는 this를 정의하기 위해 객체를 this에 주입하는 것이다.
<br>

오브젝트를 가지고 있지 않는 함수에서는 this는 undifined되어 있다. 그렇기에 this에 객체를 주입해야지 사용할 수 있다. 위 코드에서는 this(App) 코드가 실행중인 컴포넌트를 주입해준다.

<br><br>

# 컴포넌트 이벤트 만들기

<details>

<summary>Subject 컴포넌트</summary>

```javascript
class Subject extends Component {
    render() {
      return (
        <header>
          <h1><a href="/" onClick={function(e) {
            e.preventDefault();
            this.props.onChangePage();
          }.bind(this)}>{this.props.title}</a></h1>
          {this.props.sub}
        </header>
      );
    }
  }
```

이벤트가 발생하면 화면의 변화를 막기 위해서 preventDefault함수를 실행하여 변경을 방지하고
상위 컴포넌트에 정의한 함수를 불러온다.

</details>

<br><br>

<details>
<summary>App컴포넌트 안에 render메소드</summary>

```javascript
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
```
- 상위 컴포넌트에서 이벤트를 추가하고 싶은 컴포넌트에 함수를 추가한다.<br>
- 하위 컴포넌트 안에서 onClick 메소드를 추가해서 이벤트를 추가한다.<br>
- 이벤트가 발생하면 function안에서 상위 컴포넌트에서 정의한 함수를 발생한다.

</details>

실행동작 순서 
1. \<a>태그 클릭 화면 
2. 리다이렉션, get 정지 (preventDefault())
3. 상위 컴포넌트의 원하는 함수 실행 (onChangePage())
4. 상위 컴포넌트의 함수 동작
<br><br>

# 컴포넌트 이벤트 함수 인자 넘기기

```javascript
class TOC extends Component{
    render() {
        var lists = [];
        var data = this.props.data;
        var i = 0;
        while(i < data.length){
            lists.push(
            <li key={data[i].id}>
              <a href={"/content/"+data[i].id} 
                data-id = {data[i].id}
                onClick={function(e) {
                  e.preventDefault();
                  this.props.onChangePage(e.target.dataset.id);
                }.bind(this)}
              >
                {data[i].title}
              </a>
            </li>
            )
            i = i+1;
        }
```
위의 방식에서 data-id로 요소를 만들고 onChangePage의 함수 입력인자로 넣어주는 방식이다<br>

data-xxx 방식은 react에서 지원하는 방식으로 e.target.dataset.xxx로 데이터를 읽을 수 있다.

```javascript
<TOC onChangePage={function(id) {
          this.setState({
            mode : 'read',
            selected_content_id:Number(id)
          })
        }.bind(this)} 
```
TOC컴포넌트에서 전달한 인자를 id로 받고 state를 변경하는 것을 알 수 있다.
여기서 전달받은 id는 string형식이기 때문에 비교하거나 대입할 때 데이터 형식에 맞게 변환해 주어야 한다.

## 두번째 방법은 속성을 만들지 말고 바로 사용하는 방법

```javascript
                onClick={function(id, e) {
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}
```
첫번째 방식은 data-id 로 속성을 생성했다면 이것은 입력 인자로 선택된 필드의 인자를 집어넣어 사용하는 방식이다.


# create 기능 구현

```javascript
<CreateContent onSubmit={function(_title, _desc){
        this.max_content_id = this.state.contents.length+1;
        var _contents = this.state.contents.concat({
          id:this.max_content_id, title:_title, desc:_desc
        });
        this.setState({
          contents: _contents
        })
      }.bind(this)}>

      </CreateContent>
    }
```
생성이라는 버튼이 발생하면 이벤트가 발생하여 위의 메소드를 실행시킨다. 이것은 TOC의 contents에 title, desc를 추가하는 코드이다.<br><br>

```javascript
      return (
        <article>
          <h2>Create</h2>
          <form action="/create_process" method="post"
            onSubmit={function(e) {
              this.props.onSubmit(
                e.target.title.value,
                e.target.desc.value
              );
              e.preventDefault();
            }.bind(this)}
          >
            <p><input type="text" name="title" placeholder='title'></input></p>
            <p><textarea name="desc" placeholder='description'></textarea></p>
            <p><input type='submit'></input></p>
          </form>
        </article>
      );
```
위의 코드는 CreateContent 컴포넌트이다. 입력받은 title, desc를 추출하여 상위 컴포넌트에 전달한다.  <br><br>

# state 최적화
규모가 작은 프로그램이라면 시스템을 동작하는데 무리가 없을 것이다. 하지만 규모가 커진다면 렌더링이 오래 걸려 렉이 걸리는 경험을 할 것이다. 그렇기에 최적화가 필요하다.

- shouldComponentUpdate 라는 함수를 사용하여 변경되었을 때만 render함수가 동작하게 한다.
- 원본배열을 사용하지 않고 복제본을 이용하여 state를 관리한다.
<br><br>

# Update 방법

Update방식은 Create와 유사하다<br>
 - 기존의 내용을 가지고 UpdateForm에 전달한다.
 - 변경할 내용을 입력받는다.
 - 변경한다.
 - read모드로 전환한다.

## App 컴포넌트

 ```javascript
else if(this.state.mode === 'update'){
      var _content = this.getReadContent();
      _article = <UpdateContent updateId={_content.id} title={_content.title} desc={_content.desc} updateContent={function(_id, _title, _desc){
        var datas = Array.from(this.state.contents);
        for(var i = 0; i < this.state.contents.length; i++){
          var data = datas[i];
          if(data.id === _id){
            datas[i] = {id: datas[i].id, title:_title, desc: _desc};
            this.setState({
              contents: datas,
              mode: "read"
            });
            break;
          }
        }
      }.bind(this)}>
 ```
- getReadContent함수를 이용해서 내가 선택한 글을 가져온다
- 가져온 글을 업데이트컴포넌트에 제목, 설명, id를 전달한다.
<br><br><br>

## 업데이터 컴포넌트

<details>
<summary>코드</summary>

```javascript
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
```
</details>

- 제목과 설명란에 데이터를 적재한다.
- 데이터를 입력받고 제출 버튼을 누르면 상위 컴포넌트에 데이터를 전달한다.

생성 컴포넌트와 매우 유사하다. 기존의 제목과 내용을 적재한 것이다.

## `주의사항`

- 리액트의 규칙은 input, textarea와 같은 태그안의 값은 value로 지정해 줘야 한다.<br>
- value로 지정해 줄 때 이 값은 state값여야 한다.(props 금지 read-only)
- 데이터를 변경시킬 때는 `onClick` 필드를 지정해서 변경해줘야한다.


# Delete 방법

```javascript
          }else if(_mode === 'delete'){
            var _id = this.state.selected_content_id;
            var _contents = Array.from(this.state.contents);
            if(window.confirm('진짜 삭제할건가요')){for(var i = 0; i < _contents.length; i++){
              if (_contents[i].id === _id){
                _contents.pop(i);
                break;
              }
            }}
```
선택되어 있는 `this.state.selected_content_id` 를 통해 해당 게시글을 찾고 삭제한다.



---
## 추천 강의:<br>
- 제로초: [ZeroCho 홈페이지](https://www.zerocho.com/)
