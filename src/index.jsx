import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.querySelector('#root') // 담은 변수 
const root = ReactDOM.createRoot(container) // DOM -> React
root.render(<App />) // root.render(<App />)



// 메뉴누르면 컴포넌트 내용바뀌게. 
// ReactDOM.render(<App />,document.querySelector('#root'))

// import
// require(a.js)
/*
**a.js**

module.exports = {
    a:'hello world'
}

*/


