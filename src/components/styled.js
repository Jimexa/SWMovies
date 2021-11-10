import styled from '@emotion/styled';

export const AppContainer = styled('div')({
    fontFamily: '-moz-initial',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
});

export const StyledSSearchBar = styled('input')({
    width: '100%',
    margin: '0 10px',
});

export const HeaderContainer = styled('div')({
    backgroundColor: '#F7F8FA',
    display: 'flex',
    padding: '10px 10px',
});

export const BodyContainer = styled('div')({
    display: 'flex',
    flex: 1,
});

export const MovieDesc = styled('div')({});

export const Button = styled('input')({ display: 'block' });
