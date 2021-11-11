import {
    createContext,
    useCallback,
    useEffect,
    useState,
} from 'react';
import SearchBar from './components/SearchBar';
import DropDown from './components/DropDown/DropDown';
import {
    BodyContainer,
    HeaderContainer,
    AppContainer,
} from './components/styled';
import { moviesConfig } from './helpers/config';
import MoviesList from './components/MoviesList/MoviesList';
import MovieDescription from './components/MoviesDescription/MovieDescription';
import moment from 'moment';

export const AppContext = createContext();

const Header = () => {
    return (
        <HeaderContainer>
            {/* <Button type="">Sort by...</Button>*/}
            <DropDown />
            <SearchBar />
        </HeaderContainer>
    );
};

const Body = () => {
    return (
        <BodyContainer>
            <MoviesList />
            <MovieDescription />
        </BodyContainer>
    );
};

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [moviesData, setMoviesData] = useState(null);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect(() => {
        fetch(moviesConfig.url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Movies request failed');
                }
            })
            .then((data) => {
                console.log(data);
                const parsedMovies = data.map((movie) => {
                    return {
                        release_date: movie?.fields?.release_date,
                        title: movie?.fields?.title,
                        description: movie?.fields?.opening_crawl,
                        episode_id: movie?.fields?.episode_id,
                        director: movie?.fields?.director,
                    };
                });
                setMoviesData(parsedMovies);
                console.log(parsedMovies);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const sortMoviesByYear = useCallback(() => {
        if (moviesData) {
            const sortedMovies = moviesData.sort((a, b) =>
                moment(b.release_date).isAfter(a.release_date)
                    ? -1
                    : moment(a.release_date).isAfter(b.release_date)
                    ? 1
                    : 0,
            );
            setMoviesData([...sortedMovies]);
        }
    }, [moviesData, setMoviesData]);

    const sortMoviesByEpisode = useCallback(() => {
        if (moviesData) {
            const sortedMovies = moviesData.sort((a, b) =>
                a.episode_id < b.episode_id
                    ? -1
                    : a.episode_id > b.episode_id
                    ? 1
                    : 0,
            );
            setMoviesData([...sortedMovies]);
        }
    }, [moviesData, setMoviesData]);

    const handleInputChange = useCallback(
        (e) => {
            if (moviesData) {
                setSearchTerm(e.target.value);
            }
        },
        [setSearchTerm],
    );

    const handleMovieClick = useCallback(
        (movie) => {
            setSelectedMovie(movie);
        },
        [setSelectedMovie],
    );

    return (
        <AppContext.Provider
            value={{
                searchTerm,
                handleInputChange,
                moviesData,
                sortMoviesByYear,
                sortMoviesByEpisode,
                selectedMovie,
                handleMovieClick,
            }}
        >
            <AppContainer>
                <Header />
                <Body />
            </AppContainer>
        </AppContext.Provider>
    );
}

export default App;
