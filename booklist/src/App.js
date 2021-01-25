import React, {Component} from 'react';
import './App.css';
import Header from './Components/Header'
import BookList from './Components/BookList'
import Shelf from './Components/Shelf';
import data from './data';
import SearchBar from './Components/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: []
    }
  }
  

  addToShelf = (title) => {
    this.setState({ 
      shelf: [...this.state.shelf, title]
    })
  }

  clearShelf = () => {
    this.setState({
      shelf: []
    })
    console.log(this.state.shelf)
  }

  filterBooks = (input) => {
    let filteredBooks = this.state.books.filter((e) => {
      return e.title.includes(input) || e.author.includes(input)
    })
    this.setState({
      books: filteredBooks
    })
  }

  reset = () => {
    this.setState({
      books: data
    })
  }

  render() {
    
  return (
    <div className="App">

      <Header />
      <SearchBar 
        filterBooks={this.filterBooks}
        reset={this.reset}/>
      <Shelf 
        shelf={this.state.shelf}
        clearShelf={this.clearShelf}/>
      <BookList 
        books={this.state.books}
        addToShelf={this.addToShelf}/>
      
    </div>
    );
  }
}

export default App;
