import React, {Component} from 'react';

class SearchBar extends Component {
    constructor() {
        super()

        this.state = {
            userInput: ''
        }
    }

    handleChange(value) {
        this.setState({userInput: value})
    }

    handleClick() {
        this.props.filterBooks(this.state.userInput)
    }

    handleClear() {
        this.setState({userInput: ''})
        this.props.reset()
    }

    render() {
        console.log(this.state.userInput)
        return (
            <div className='search-bar'>
                <input
                    class='search'
                    onChange={(e) => this.handleChange(e.target.value)}
                    value={this.state.input}>
                </input>

                <button
                    class='search'
                    onClick={(e) => this.handleClick()}>
                    search
                </button>

                <button
                    class='search'
                    onClick={(e) => this.handleClear()}>
                    clear search
                </button>
            </div>
        )
    }
}

export default SearchBar