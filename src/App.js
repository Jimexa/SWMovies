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
    MovieDesc,
    MoviesList,
    Button,
    AppContainer,
} from './components/styled';
import { moviesConfig } from './helpers/config';

export const AppContext = createContext();

const Header = () => {
    return (
        <HeaderContainer>
            {/* <Button type="">Sort by...</Button> */}
            <DropDown />
            <SearchBar />
        </HeaderContainer>
    );
};

const Body = () => {
    return (
        <BodyContainer>
            <MoviesList />
            <MovieDesc />
        </BodyContainer>
    );
};

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [moviesData, setMoviesData] = useState(null);

    useEffect(() => {
        fetch(moviesConfig.url, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                const parsedMovies = data.map((movie) => {
                    return {
                        release_date: movie?.fields?.release_date,
                        title: movie?.fields?.title,
                        description: movie?.fields?.opening_crawl,
                    };
                });
                setMoviesData(parsedMovies);
                console.log(parsedMovies);
            });
    }, []);

    const handleInputChange = useCallback(
        (e) => {
            setSearchTerm(e.target.value);
        },
        [setSearchTerm],
    );

    return (
        <AppContext.Provider
            value={{ searchTerm, handleInputChange }}
        >
            <AppContainer>
                <Header />
                <Body />
            </AppContainer>
        </AppContext.Provider>
    );
}

export default App;
