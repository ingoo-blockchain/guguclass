import React,{Component} from 'react'

class CommentList extends Component{

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

    // this.props.list  배열이 몇개죠 ? 1개
    items = () =>  this.props.list.map((v,k)=>{
        return (
            <ul className="comment-row" key={k}>
                <li className="comment-id">{v.userid}</li>
                <li className="comment-content">{v.content}</li>
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