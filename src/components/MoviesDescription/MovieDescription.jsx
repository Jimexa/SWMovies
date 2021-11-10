import { useContext } from 'react';
import { AppContext } from '../../App';
import { MovieDescriptionContainer, NoMovieMessage } from './styled';

export default function MovieDescription() {
    const { moviesData, selectedMovieId } = useContext(AppContext);

    return (
        <MovieDescriptionContainer>
            {selectedMovieId ? (
                <>selected movie {selectedMovieId}</>
            ) : (
                <NoMovieMessage>No movie selected</NoMovieMessage>
            )}
        </MovieDescriptionContainer>
    );
}
