import React, { useState } from "react";
import styled from "@emotion/styled";


const DropDownContainer = styled("div")`
  width: 10.5em;
  margin: 0 auto;
`;

const DropDownHeader = styled("div")`
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: gray;
  background: #ffffff;
  &:hover{background-color:#ebebeb; cursor: pointer;}
`;

const DropDownListContainer = styled("div")`position:absolute;`;

const DropDownList = styled("ul")`
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

const ListItem = styled("li")`
  list-style: none;
  padding: 0.4em 1em;
  &:hover{background-color:#ebebeb; cursor: pointer;}
`;

const QuitChar = styled("span")`
  color: gray;
  float: right;
`;

const options = ["Year", "Episode"];

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
      <DropDownContainer>
        <DropDownHeader onClick={toggling}>
          {"Sort by"}
        </DropDownHeader>
        {isOpen && (
          <DropDownListContainer>
            <DropDownList>
              <ListItem onClick={()=>setIsOpen(false)}>{"Sort by"}<QuitChar>X</QuitChar></ListItem>
              {options.map((option,i) => (
                <ListItem onClick={onOptionClicked(option)} key={i}>
                  {option}
                </ListItem>
              ))}
            </DropDownList>
          </DropDownListContainer>
        )}
      </DropDownContainer>
  );
}