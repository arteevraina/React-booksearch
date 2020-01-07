import React from "react"
import './Display.css'
//condition removes undefined error

class Display extends React.Component {
    render(){
        return(
            <div>
            {
                this.props.book.map(Book => {
                    return(
                    <div className="row" key = {Book.id}>
                        <div className="col-sm-6 col-md-4">
                            <div className="thumbnail">
                                <a href = {Book.volumeInfo.infoLink} className="book"><img src = {Book.volumeInfo.imageLinks !== undefined ? Book.volumeInfo.imageLinks.thumbnail : ""} 
                                     alt = "book-images"
                                    />
                                </a>
                                    <div className="caption"><h3>{Book.volumeInfo.title}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        )
    }
}

export default Display 