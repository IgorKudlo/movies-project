import React from "react"
import Preloader from "../components/Preloader"
import Movies from "../components/Movies"
import Search from "../components/Search"

class Main extends React.Component {
    state = {
        movies: [],
        loading: true,
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=11e5b044&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    searchMovies = (str, type = 'all') => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=11e5b044&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search, loading: false }))
    }

    render() {
        const {movies, loading} = this.state;

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies}/>
                {
                    loading
                        ? <Preloader/>
                        : <Movies movies={movies} />
                }
            </main>
        )
    }
}

export default Main