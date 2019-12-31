import React from "react"
import axios from "axios"

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: [],
            query: ''
        }
        this.bind = this.handleClick.bind(this)
        this.bind = this.handleChange.bind(this)
    }

    handleClick = (event) => {
        event.preventDefault()
        const apiPath = "https://www.googleapis.com/books/v1/volumes?q="
        const apiKey = "AIzaSyBgLSwNtArchOjB__1-kqOoqrUt1d_AwXA"
        var part = "&key="
        let key = this.state.query
        var url = apiPath + key + part + apiKey
        axios.get(url)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log("Error")
            })
    }

    handleChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }
    render(){
    return(
        <div className="container">
            <h1>Book Search App</h1>
            <form>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search for Books" onChange={this.handleChange}/>
                <br/>
                <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
            </div>
            </form>
        </div>
    )}
}

export default Search