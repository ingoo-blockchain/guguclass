# webpack

더편해서 하는건데. 
왜필요한지 모르겠다. 

nodejs 
npm 패키지를 쉽게 설치가 가능하다.

```
npm init -y
npm install react react-dom
npm install -D webpack webpack-cli
```

파일생성 (프로젝트 안에서.)
> webpack.config.js 

디렉토리 생성 (프로젝트 안에서.)
> mkdir src dist

template  > index.html 생성해주셔야합니다.
*기본적인 html 내용과 div , script 내용 입력*

src 디렉토리 안에서 index.jsx  


바벨이라는것은 
React가만든사람이 만든게아니에요~

React만든사람들이 자기의 입맛에 맞게 구현한 바벨을 

Webpack Babel 연결해주는 라이브러리
옛날 브라우저에서도 구동할수있게 코드를 바꿔주는 바벨이 필요하구요,
JSX를 사용할수있는 바벨이 필요합니다.

**Webpack Babel 연결해주는 라이브러리**
```
    npm install -D babel-loader 
```

**옛날 브라우저에서도 구동할수있게 코드를 바꿔주는 바벨**
```
    npm install -D @babel/preset-env
```

**JSX를 사용할수있는 바벨**
```
    npm install -D @babel/preset-react
```

npm install
```
    npm install -D babel-loader @babel/preset-env @babel/preset-react

    npm install -D @babel/core
```

npm install -g webpack webpack-cli





# devServer

1개의 html, 1개의 javascript

src 폴더안에서 코드를 수정해. 

bundle 또 생성주고,

1. 웹서버를 구축을 해준다.
index.html <-- 

src폴더안에서 코드가 수정됨을 감지하면.
서버를 재시작해줘요. bundle 다시 만들어줍니다.

자동적으로.
개발할떄만 사용하는것 ! 

코드를 수정하잖아요. 

CRA 아 웹서버도 되네~?



```
npm install -D webpack-dev-server
```


# html template
```
npm i html-webpack-plugin
```

**webpack.config.js**
```javascript
 const HtmlWebpackPlugin = require('html-webpack-plugin') // 추가
```

```

npm install -D @pmmmwh/react-refresh-webpack-plugin
npm install -D react-refresh
```

const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')


CSS 처리
```
npm install -D mini-css-extract-plugin css-loader
```


css-loader 
<div className="app">
</div>


mini-css-extract-plugin
html link
<style>
</style>

webpack -> nodejs 
webpack 알아서 import 되는거. 가져와서 번들만들지않냐,
css 파일도 import 되면 
번들해주면어떨까? 




CSS 파일을 import 하는방법
```
```

css.module 만드는 방법
```
```


styeld-component 만드는 방법
많이쓰니깐.
```
npm i styled-components
```


내가 기술스택이 경쟁력이 있는가?
모집공고 보면됨,
어떤사람뽑나.

front-end

https 사용경험 돈듬

도메인이있ㅇ어야 https 가능

근대 할거임

님들 카드준비하셈

해외결제 되는걸로.

그럼 안배우자
안해두됨 ^^

사실얼마안함

도메인가격 1400~9000원 1년기간.

과

AWS 
가격

// 구구단찍기 

2

2*1=2
2*2=4
2*3=6



