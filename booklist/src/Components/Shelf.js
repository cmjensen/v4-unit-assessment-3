
const Shelf = (props) => {

    const mappedTitles = props.shelf.map((elem) => {
        return (
            <h2>{elem}</h2>
        )
    })
    
    return (
        <div>
            <h2>Your Shelf</h2>
            <button
                onClick={() => props.clearShelf()}>
            Clear Shelf
            </button>
            <h2>{mappedTitles}</h2>
        </div>
    )
}

export default Shelf;