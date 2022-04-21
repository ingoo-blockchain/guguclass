import React,{Component} from 'react'

class CommentForm extends Component{

    state = {
        value: ''
    }

    handleChange = e => {
        const { value } = {...e.target}
        this.setState({
            value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state.value)
        // axios 가발동.
        // 결과물을 줄때. 그때 상태를 바꾸면되여.
        // then 콜백 함수 안에서 상태를 바꾸시면 됩니다.
        const obj = {userid:'web7722',content:this.state.value,date:"2022-04-21"}
        
        this.props.addList(obj)
        this.setState({
            value:''
        })
        // Submit 버튼을눌렀을때. input박스에잇는 내용을 쉽게 가져올수있게 처리는함.
        // input.value는 쉽게 가지고올수있는 상태

        // App컴포넌트에 있는 list라는 값을 push 해줘야하는 상황이에요, 
            // App컴포넌트에서 상태를 바꿀수있는 함수를만듭시다,
            // App컴포넌트에서 상태를 바꿀수있는 함수를, CommentForm 컴포넌트에게 props로 함수를 전달해줍시다.
            // handleSubmit 함수가 호출되었을때 props 로 전달받은 함수를 실행시킬거에요, 
            // props로 전달받은 함수는 CommentForm 에서 받은 상태 value값을 인자값으로 넣어준다,
            // CommentForm 에 있는 value라는 상태값을 '' 빈 문자열로 상태를 바꾼다~
    }

    // 
    render(){
        return(
            <li className="comment-form">
                <form onSubmit={this.handleSubmit}>
                    <span className="ps_box">
                        <input 
                            type="text" 
                            className="int"
                            placeholder="댓글을 입력해 주세요."
                            onChange={this.handleChange}
                            value={this.state.value}
                        />
                    </span>
                    <input type="submit" className="btn" value="등록" />
                </form>
            </li>
        )
    }
}

export default CommentForm