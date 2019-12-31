import React from "react"
import axios from "axios"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            books: [],
            query: ''
        }
        this.bind = this.handleClick.bind(this)
        this.bind = this.handleChange.bind(this)
    }

    handleClick() {
        const apiPath = "https://www.googleapis.com/books/v1/volumes?q="
        const apiKey = "AIzaSyBgLSwNtArchOjB__1-kqOoqrUt1d_AwXA"
        var part = "&key="
        let query = this.state.query
        let url = apiPath + query + part + apiKey
        

    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        })
    }

    render(){
    return(
        <div class="container">
            <input type="text" className="form-control" placeholder="Search for Books" onChange={this.handleChange}/>
            <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
        </div>
    )}
}

export default Search