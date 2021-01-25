
const Shelf = (props) => {

    const mappedTitles = props.shelf.map((elem) => {
        return (
            <h2>{elem}</h2>
        )
    })
    
    return (
        <div class='shelf'>
            <h2 class='your-shelf'>Your Shelf</h2>
            <button
                onClick={() => props.clearShelf()}>
            clear shelf
            </button>
            <h2 class='shelf-books'>{mappedTitles}</h2>
        </div>
    )
}

export default Shelf;