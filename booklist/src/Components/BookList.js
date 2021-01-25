

const BookList = (props) => {
        
    const mappedBooks = props.books.map((elem) => {
        return (
            <div className='book-display'>
                <img 
                className='book-covers'
                src={elem.img}
                onClick={() => props.addToShelf(elem.title)}>

                </img>
                <h2 className='titles'>{elem.title}</h2>
                <h2 className='authors'>{elem.author}</h2>
            </div>
        )
    })

        return (
            <div>
                <h2 className='shelf-books'>{mappedBooks}</h2>
            </div>
        )
} 


export default BookList;