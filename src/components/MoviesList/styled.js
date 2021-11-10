import styled from '@emotion/styled';
import { mq } from '../../helpers/config';

export const MoviesListContainer = styled('div')(
    {
        flex: 1,
    },
    mq({
        borderRight: ['none', '2px solid #E1E7EC'],
        borderBottom: ['2px solid #E1E7EC', 'none'],
    }),
);

export const MoviesListItem = styled('div')(
    {
        display: 'grid',

        padding: '10px 20px',
        ':hover': { backgroundColor: '#ebebeb', cursor: 'pointer' },
    },
    mq({ gridTemplateColumns: ['25% 50% 25%', '15% auto 15%'] }),
);

export const Episode = styled('span')({
    fontSize: '15px',
});
