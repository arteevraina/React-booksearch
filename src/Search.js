import React from "react"

class Search extends React.Component {
    render(){
    return(
    <div>
        <div class="container">
        <input type="text" className="form-control" placeholder="Search for Books"/>
        <button type="submit" className="btn btn-success">Search</button>
    </div>
        </div>
    )}
}

export default Search