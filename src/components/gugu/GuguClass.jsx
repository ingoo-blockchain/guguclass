import React,{Component} from 'react'
import GuguForm from './GuguForm'
import GuguList from './GuguList'

//guguclass
//guguform
//gugulist

class GuguClass extends Component{

    state = {
        value:null
    }

    handleSubmit = e => {
        e.preventDefault()
        
        this.setState({
            ...this.state,
            value:parseInt(e.target.gugu.value)
        })
    }

    render(){
        return(
            <>
                
                <GuguList 
                    value={this.state.value}
                />
                <GuguForm 
                    onSubmit={this.handleSubmit}
                />
            </>
        )
    }
}

export default GuguClass