import styled from '@emotion/styled';

export const MovieDescriptionContainer = styled('div')({
    flex: 1,
    display: 'flex',
});

export const NoMovieMessage = styled('div')({
    margin: 'auto',
    textAlign: 'center',
    fontSize: '26px',
});

export const SelectedMovieContainer = styled('div')({
    paddingLeft: '20px',
    paddingTop: '20px',
});

export const SelectedMovieHeader = styled('h1')({
    fontSize: '28px',
});

export const SelectedMovieDescription = styled('h5')({
    fontSize: '20px',
    fontWeight: 'normal',
});
