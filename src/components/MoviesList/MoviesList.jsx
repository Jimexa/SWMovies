import { AppContext } from '../../App';
import { useContext } from 'react';
import {
    Episode,
    MoviesListContainer,
    MoviesListItem,
} from './styled';

export default function MoviesList() {
    const { moviesData, handleMovieClick } = useContext(AppContext);

    return (
        <MoviesListContainer>
            {moviesData
                ? moviesData.map((movie) => {
                      return (
                          <MoviesListItem
                              onClick={() => handleMovieClick(movie)}
                              key={movie.episode_id}
                          >
                              <Episode>
                                  EPISODE {movie?.episode_id}
                              </Episode>
                              <span>{movie?.title}</span>
                              <span>{movie?.release_date}</span>
                          </MoviesListItem>
                      );
                  })
                : 'loading'}
        </MoviesListContainer>
    );
}
