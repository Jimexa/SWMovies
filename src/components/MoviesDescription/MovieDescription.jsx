import { useContext } from 'react';
import { AppContext } from '../../App';
import {
    MovieDescriptionContainer,
    NoMovieMessage,
    SelectedMovieContainer,
    SelectedMovieDescription,
    SelectedMovieHeader,
} from './styled';

export default function MovieDescription() {
    const { selectedMovie } = useContext(AppContext);

    return (
        <MovieDescriptionContainer>
            {selectedMovie ? (
                <SelectedMovieContainer>
                    <SelectedMovieHeader>
                        {selectedMovie.title}
                    </SelectedMovieHeader>
                    <SelectedMovieDescription>
                        {selectedMovie.description}
                    </SelectedMovieDescription>
                    Directed by: {selectedMovie.director}
                </SelectedMovieContainer>
            ) : (
                <NoMovieMessage>No movie selected</NoMovieMessage>
            )}
        </MovieDescriptionContainer>
    );
}
