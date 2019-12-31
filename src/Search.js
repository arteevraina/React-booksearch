import React from "react"
import axios from "axios"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            books: []
        }
        this.bind = this.handleClick.bind(this)
    }

    handleClick() {
        axios.get('https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=AIzaSyBgLSwNtArchOjB__1-kqOoqrUt1d_AwXA')
        .then(resonse => {
            console.log(response => {
                console.log(response)
            })
        })
        .catch(err => {
            console.log("Error")
        })
    }

    render(){
    return(
        <div class="container">
            <input type="text" className="form-control" placeholder="Search for Books"/>
            <button type="submit" className="btn btn-success" onClick={this.handleClick}>Search</button>
        </div>
    )}
}

export default Search