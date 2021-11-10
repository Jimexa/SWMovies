import { AppContext } from '../../App';
import { useContext } from 'react';
import {
    Episode,
    MoviesListContainer,
    MoviesListItem,
} from './styled';

export default function MoviesList() {
    const { moviesData, handleMovieClick, searchTerm } =
        useContext(AppContext);

    return (
        <MoviesListContainer>
            {moviesData
                ? moviesData
                      .filter((movie) =>
                          movie.title
                              .toUpperCase()
                              .includes(searchTerm.toUpperCase()),
                      )
                      .map((movie) => {
                          return (
                              <MoviesListItem
                                  onClick={() =>
                                      handleMovieClick(movie)
                                  }
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
