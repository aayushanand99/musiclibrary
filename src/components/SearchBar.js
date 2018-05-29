import React,{Component} from 'react'
import '../App.css';


export default class SearchBar extends Component{
    constructor(props){
        super(props)
        this.state={value:''}
    }

    callSearch(){
        this.props.handleSearch(this.state.value)
    }

    render(){
        return <div className="row ">
            <input type="text" className="form-control col-sm-8" placeholder="Song Name" aria-label="SongName" aria-describedby="basic-addon1" onChange={(text) => {this.setState({value:text.target.value})}} />
            <button type="button" class="btn col-sm-2" onClick={()=>this.callSearch()}>Search</button>
        </div>
    }
}