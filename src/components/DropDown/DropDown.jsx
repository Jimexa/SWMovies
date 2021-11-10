import React, { useContext, useState } from 'react';
import { AppContext } from '../../App';
import {
    DropDownContainer,
    DropDownHeader,
    DropDownList,
    DropDownListContainer,
    ListItem,
    QuitChar,
} from './styled';

const options = ['Year', 'Episode'];

export default function DropDown() {
    const [isOpen, setIsOpen] = useState(false);
    const { sortMoviesByYear, sortMoviesByEpisode } =
        useContext(AppContext);

    const toggling = () => setIsOpen(!isOpen);

    const onOptionClicked = (value) => () => {
        if (value === 'Year') {
            sortMoviesByYear();
            console.log('Year clicked');
        } else {
            sortMoviesByEpisode();
            console.log('Episode clicked');
        }
        setIsOpen(false);
    };

    return (
        <DropDownContainer>
            <DropDownHeader onClick={toggling}>
                {'Sort by'}
            </DropDownHeader>
            {isOpen && (
                <DropDownListContainer>
                    <DropDownList>
                        <ListItem onClick={() => setIsOpen(false)}>
                            {'Sort by'}
                            <QuitChar>X</QuitChar>
                        </ListItem>
                        {options.map((option, i) => (
                            <ListItem
                                onClick={onOptionClicked(option)}
                                key={i}
                            >
                                {option}
                            </ListItem>
                        ))}
                    </DropDownList>
                </DropDownListContainer>
            )}
        </DropDownContainer>
    );
}
