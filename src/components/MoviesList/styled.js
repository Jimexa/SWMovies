import styled from '@emotion/styled';

export const MoviesListContainer = styled('div')({
    flex: 1,
    borderRight: '2px solid #E1E7EC',
});

export const MoviesListItem = styled('div')({
    display: 'grid',
    gridTemplateColumns: '15% auto 15%',
    padding: '10px 20px',
});

export const Episode = styled('span')({
    fontSize: '15px',
});
