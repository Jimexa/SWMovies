import SearchBar from './components/SearchBar';
import {
    BodyContainer,
    HeaderContainer,
    MovieDesc,
    MoviesList,
} from './components/styled';

const Header = () => {
    return (
        <HeaderContainer>
            <button>Sort by</button>
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
    return (
        <>
            <Header />
            <Body />
        </>
    );
}

export default App;
