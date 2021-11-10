import styled from '@emotion/styled';

export const DropDownContainer = styled('div')`
    width: 10.5em;
    margin: 0 auto;
`;

export const DropDownHeader = styled('div')`
    padding: 0.4em 2em 0.4em 1em;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    font-size: 1.3rem;
    color: gray;
    background: #ffffff;
    &:hover {
        background-color: #ebebeb;
        cursor: pointer;
    }
`;

export const DropDownListContainer = styled('div')`
    position: absolute;
`;

export const DropDownList = styled('ul')`
    margin-top: 10px;
    padding: 0;
    margin: 0;
    width: 30vw;
    background: #ffffff;
    border: 2px solid #e5e5e5;
    box-sizing: border-box;
    color: gray;
    font-size: 1.3rem;
    font-weight: 500;
    & :first-of-type {
        color: #616161;
    }
`;

export const ListItem = styled('li')`
    list-style: none;
    padding: 0.4em 1em;
    &:hover {
        background-color: #ebebeb;
        cursor: pointer;
    }
`;

export const QuitChar = styled('span')`
    color: gray;
    float: right;
`;
