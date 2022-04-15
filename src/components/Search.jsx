import React from "react"

class Search extends React.Component {
    state = {
        search: '',
        type: 'all',
    }

    handleKey = (event) => {
        if (event.key === "Enter") this.props.searchMovies(this.state.search, this.state.type)
    }

    handleFilter = (event) => {
        this.setState(
            () => ({type: event.target.dataset.type}),
            () => this.props.searchMovies(this.state.search, this.state.type)
        )
    }


    render() {
        return (
            <div className="input-field">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({search: e.target.value})}
                    onKeyDown={this.handleKey}
                />
                <button className="btn search-btn light-blue darken-4"
                        onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
                >Search</button>
                <div>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={this.handleFilter}
                               checked={this.state.type === "all"}
                               data-type="all"
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={this.handleFilter}
                               checked={this.state.type === "movie"}
                               data-type="movie"
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input className="with-gap"
                               name="type"
                               type="radio"
                               onChange={this.handleFilter}
                               checked={this.state.type === "series"}
                               data-type="series"
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search

