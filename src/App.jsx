import React, { Component } from 'react'
import './assets/a.css'
import styels from './assets/App.module.css'
import styelss from './assets/test.module.css'
// import styles from './assets/a.module.css'
import styled from 'styled-components'
import GuguClass from './components/gugu/GuguClass'
import Comment from './components/comment/Comment'
import CommentForm from './components/comment/CommentForm'
import CommentList from './components/comment/CommentList'

// 컴포넌트 내에서. 바로 CSS를 작업한 내용을 만들수있다.

const Button = styled.button`
    background:#000;
    border:none;
    color:#fff; 
    padding:7px 14px;
`

const HoverButton = styled(Button)`
     background:#007bff;
     :hover{
         background:#0069d9;
     }
`

const display = (props)=> {
    let flag;
    if( props.background === '#333' ) flag = 'block';
    return flag;
} 

const ActiveButton = styled(Button)`
    background:${ ({background}) => background };
    display:${display};
`

// <Button></Button>

// const Button = styled.button`
//     background:#000;
//     border:none;
//     color:#fff;
//     padding:7px 14px;
// `

// const ButtonHover = styled(Button)`
//     background:#007bff;
//     :hover{
//         background:#0069d9;
//     }
// `

// const ButtonActive = styled(Button)`
//     background:${ (props) => props.color };
//     color:${ (props) => props.font };
// `

class App extends Component{

    state = {
        value:'hello qweqwedfd!!!!',
        list:[]   
    }

    // 생명주기 함수 
    componentDidMount(){ // 최초실행.
        this.setState({ // 불변성...  데이터가 화면이바뀐다.
            ...this.state,
            list:[
                {userid:'web7722',content:'안녕하세요2',date:"2022-04-21",updateflag:true},
                {userid:'web7722',content:'안녕하세요3',date:"2022-04-21",updateflag:true},
                {userid:'web7722',content:'안녕하세요4',date:"2022-04-21",updateflag:true}
            ],
        })
    }

    // content : stirng
    // obj
    addList = (obj) => {
        this.setState({
            ...this.state,
            list:[...this.state.list, obj]
        })
    }

    // state 끌어올리기 하다보면 상태를 바꾸는 함수를 만들어야되여, 

    updateList = list => {
        this.setState({
            ...this.state,
            list
        })
    }




    render(){
        const { list } = this.state
        return(
            <>
                <Comment> 
                    <CommentForm 
                        addList={ this.addList }
                    /> 
                    <CommentList 
                        list={ list }
                        updateList={ this.updateList }
                    /> 
                </Comment> 

                <Comment> 
                    <CommentForm 
                        addList={ this.addList }
                    /> 
                    <CommentList 
                        list={ list }
                        updateList={ this.updateList }
                    /> 
                </Comment> 

                <Comment> 
                    <CommentForm 
                        addList={ this.addList }
                    /> 
                    <CommentList 
                        list={ list }
                        updateList={ this.updateList }
                    /> 
                </Comment> 

                <Comment> 
                    <CommentForm 
                        addList={ this.addList }
                    /> 
                    <CommentList 
                        list={ list }
                        updateList={ this.updateList }
                    /> 
                </Comment> 
                {/* <GuguClass /> */}
                {/* <div className="color">{this.state.value}</div>
                <div className={styels.color}>여기는App module css</div>
                <div className={styelss.color}>여기는Test module css</div>
                <div>
                    <Button>하잉</Button>
                    <HoverButton>두번하잉</HoverButton>
                    <ActiveButton background="#333">세번하잉</ActiveButton>
                </div> */}
                {/* <span className={styles.color}>{this.state.value}</span>
                <div className='color'>이건됨?</div>
                <Button>하잉</Button>
                <ButtonHover>두번하잉</ButtonHover>
                <ButtonActive color='#efefef' font='#000'>세번하잉</ButtonActive> */}
            </>
        )
    }
}


export default App;

