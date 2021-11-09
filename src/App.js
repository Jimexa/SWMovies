import SearchBar from './components/SearchBar';
import {
    BodyContainer,
    HeaderContainer,
    MovieDesc,
    MoviesList,
    Button,
} from './components/styled';

const Header = () => {
    return (
        <HeaderContainer>
            <Button>Sort by...</Button>
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
