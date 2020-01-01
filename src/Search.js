import React from "react"
import Display from "./Display"
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
        event.preventDefault()    // This prevents page on reloading on clicking submit
        const apiPath = "https://www.googleapis.com/books/v1/volumes?q="
        const apiKey = process.env.REACT_APP_API_KEY
        var part = "&key="
        let key = this.state.query
        var url = apiPath + key + part + apiKey
        axios.get(url)
            .then(response => {
                this.setState({books: response.data.items})
                console.log(this.state.books)
            })
            .catch(err => {
                alert("Type in the name of book")
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
            <Display book={this.state.books}/>
        </div>
    )}
}

export default Search