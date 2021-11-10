import styled from '@emotion/styled';
import { mq } from '../helpers/config';

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

export const BodyContainer = styled('div')(
    {
        display: 'flex',
        flex: 1,
    },
    mq({ flexDirection: ['column', 'row'] }),
);
