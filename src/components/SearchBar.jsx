import { StyledSSearchBar } from './styled';
import { AppContext } from '../App';
import { useContext } from 'react';

export default function SearchBar() {
    const { searchTerm, handleInputChange } = useContext(AppContext);

    return (
        <StyledSSearchBar
            onChange={handleInputChange}
            value={searchTerm}
            type="text"
            placeholder="Type to search..."
        />
    );
}
