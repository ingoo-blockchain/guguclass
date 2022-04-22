import React,{Component} from 'react'

class CommentList extends Component{
    state = {
        value : '',
        update:null //
    }

    
    /*
        CommentList에서 상태를 만들었다면.
        뿌리는 데있어가지곤 엄청쉽다! 

        CommnetForm 같이 생각을해봐야됨.

        state = {
            list:[
                {id,documet.querySelector('.int').value ,date},
                {id,content,date}
            ]
        }
    */
    // javascript로 url 이동안되게. 

    // <a href="http://localhost:3000/aaa#hello"
    input = React.createRef()

    /* 생명주기 함수!! */
    // componentDidUpdate(){ // 컴포넌트가 리랜더링 되었을때. -> 상태가 바뀌었을때.
    //     console.log('이것은 업데이트~')
    // }

    // componentDidMount(){ // 애는 최초로 컴포넌트가 랜더가 완료가 되었을때.
    //     //소켓연결
    //     console.log('이것은 로드~')
    // }

    // componentWillUnmount(){ // 컴포넌트가 사라질때에요. socket 많이쓰는 .
    //     //소켓종료 / router 
    //     console.log('이것은 컴포넌트 사라짐~')
    // }
    
    handleClick = i => e => {
        
 
        this.setState({
            ...this.state,
            value:e.target.innerHTML,
            update:i
        })
    }

    updateChange = e => {
        const {value} = {...e.target}

        this.setState({
            ...this.state,
            value
        })
    }

    updateKeyDown = i => e => {
        if(e.key !== 'Enter') return 

        const { updateList,list } = this.props
        // list 
        const newList = [...list]  
        newList[i].content = this.state.value 
        
        // axios 날리기~

        this.setState({
            ...this.state,
            update:null,
        })
        
        // 문법이라기보단 사고 
        // 스킬적인거 redux router 

        updateList(newList)
    }

    deleteClick = k => {
        const { updateList,list } = this.props

        // axios 날리기 

        const newList = [...list].filter( (v,i) => i !== k )
        console.log(newList)
        // App 컴포넌트에있는 상태를 바꿔야함 

        updateList(newList)

        // const deleteArr = []
        // for(let i=0; i<newList.length; i++) {
        //     if(i !== k) { // k :0 i : 0 false
        //         deleteArr.push(newList[i])
        //     } 
        // }

        // console.log(deleteArr)

        // const deleteArr = newList.filter( (v,i) => {
        //     return i !== k
        // })

        // const deleteArr = newList.filter( (v,i) => i !== k)


    }

    // e <-- 변수를 사용하고싶고, 이벤트를넣을때, 인자값을 넣는경우만 
    // 언어 내용 모르면 안쓰면 다아는거 ^^
    

    // this.props.list  배열이 몇개죠 ? 1개

    // 1. span 을 클릭시 안에 들어가있는 내용 을 출력하기.
        // span onclick 시 event 매개변수에서 e.target.innerHTML 
        // 클릭했을때 해당 내용을 정보를 가져올수있었다. 
            // 클릭을햇을대는 CommentList 의 상태에게 저장을 시켜줍니다. 
    
    items = () =>  this.props.list.map((v,k)=>{
        return (
            <ul className="comment-row" key={k}>
                <li className="comment-id">{v.userid}</li>
                <li className="comment-content">
                    {
                        this.state.update === k
                        ? <input 
                            type="text" 
                            value={this.state.value}
                            onChange={this.updateChange}
                            onKeyDown={this.updateKeyDown(k)}
                            className="comment-update-input"
                            ref={this.input}
                        />
                        : (
                            <>
                            <span onClick={this.handleClick(k)}> {v.content} </span>
                            <span className='comment-delete-btn' onClick={ () => this.deleteClick(k) }>
                                X
                            </span>
                            </>
                        )
                    }
                    
                </li>
                <li className="comment-date">{v.date}</li>
            </ul>
        )
    })

    render(){  
        // code 를 안슨느게좋다. 
        return(
            <li>
                {this.items()}
            </li>
        )
    }
}

export default CommentList