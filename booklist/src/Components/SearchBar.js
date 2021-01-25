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
            <div>
                <input
                    onChange={(e) => this.handleChange(e.target.value)}
                    value={this.state.input}>
                </input>

                <button
                    onClick={(e) => this.handleClick()}>
                    Search
                </button>

                <button
                    onClick={(e) => this.handleClear()}>
                    Clear Search
                </button>
            </div>
        )
    }
}

export default SearchBar