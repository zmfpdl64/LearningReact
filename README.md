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


```
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

```

// Subject 컴포넌트
      <header>
        <h1>{this.props.title}</h1>
        {this.props.sub}
      </header>
// App 컴포넌트에서 Subject 컴포넌트 호출 
<Subject title="React" sub="For UI"></Subject>
```
props는 어트리뷰트와 같은 의미로 해당 인자로 들어오는 값으로 주입하겠다는 의미이다.

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

```
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
```
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

Subject 컴포넌트
```
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
<br><br>
App컴포넌트 안에 render메소드
```
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

실행동작 순서 
1. \<a>태그 클릭 화면 
2. 리다이렉션, get 정지 (preventDefault())
3. 상위 컴포넌트의 원하는 함수 실행 (onChangePage())
4. 상위 컴포넌트의 함수 동작

# 컴포넌트 이벤트 함수 인자 넘기기

```
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

```
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

```
                onClick={function(id, e) {
                  e.preventDefault();
                  this.props.onChangePage(id);
                }.bind(this, data[i].id)}
```
첫번째 방식은 data-id 로 속성을 생성했다면 이것은 