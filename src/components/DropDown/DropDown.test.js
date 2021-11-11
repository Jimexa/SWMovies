import { render, screen } from '@testing-library/react';
import DropDown from './DropDown';
import { AppContext } from '../../App';

const sortMoviesByYear = () => {
    console.log('sortbyyear');
};
const sortMoviesByEpisode = () => {
    console.log('sortbyepisode');
};

test('renders dropdown button text', () => {
    render(
        <AppContext.Provider
            value={(sortMoviesByEpisode, sortMoviesByYear)}
        >
            <DropDown />
        </AppContext.Provider>,
    );
    const sortByElement = screen.getByText('Sort by');
    expect(sortByElement).toBeInTheDocument();
});
