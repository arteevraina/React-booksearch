import React from "react"

class Display extends React.Component {
    render(){
        return(
            <div>
            {
                this.props.book.map(Book => {
                    return(
                    <div className="row" key = {Book.id}>
                        <img src = {Book.volumeInfo.imageLinks.smallThumbnail} alt = "book-images" className="bookimg"/>
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