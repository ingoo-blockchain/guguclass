import React, { Component } from 'react'
import './assets/a.css'
import styels from './assets/App.module.css'
import styelss from './assets/test.module.css'
// import styles from './assets/a.module.css'
import styled from 'styled-components'
import GuguClass from './components/GuguClass'

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
        value:'hello qweqwedfd!!!!'
    }

    render(){
        return(
            <>
                <GuguClass />
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

function hi(){
    console.log('hello world')
}

export default App;

