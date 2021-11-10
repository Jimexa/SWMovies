import facepaint from 'facepaint';

export const moviesConfig = {
    url: 'https://star-wars-api.herokuapp.com/films',
};

const breakpoints = [639, 1025];

export const mq = facepaint(
    breakpoints.map((bp) => `@media (min-width: ${bp}px)`),
);
