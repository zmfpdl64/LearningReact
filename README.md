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


