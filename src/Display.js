import React from "react"

//condition removes undefined error

class Display extends React.Component {
    render(){
        return(
            <div>
            {
                this.props.book.map(Book => {
                    return(
                    <div className="row" key = {Book.id}>
                        <a href = {Book.volumeInfo.infoLink}><img src = {Book.volumeInfo.imageLinks !== undefined ? Book.volumeInfo.imageLinks.smallThumbnail : ""} 
                            alt = "book-images"/>
                        </a>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Display 