

const BookList = (props) => {
        
    const mappedBooks = props.books.map((elem) => {
        return (
            <div>
                <img 
                src={elem.img}
                onClick={() => props.addToShelf(elem.title)}>

                </img>
                <h2>{elem.title}</h2>
                <h2>{elem.author}</h2>
            </div>
        )
    })

        return (
            <div>
                <h2>{mappedBooks}</h2>
            </div>
        )
} 


export default BookList;