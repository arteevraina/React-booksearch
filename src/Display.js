import React from "react"

class Display extends React.Component {
    render(){
        return(
            <div>
            {
                this.props.book.map(Book => {
                    return(
                    <div className="row">
                        <img src = {Book.volumeInfo.imageLinks.thumbnail} alt = "book-images" className="col-md-4"/>
                        <a href = {Book.volumeInfo.infoLink}>{Book.volumeInfo.title}</a>
                    </div>
                    )
                    
                })
            }
            </div>
        )
    }
}

export default Display 