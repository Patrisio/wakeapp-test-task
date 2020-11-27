import React from 'react';
import styled from 'styled-components';

export default function Button({ children }) {
  return (
    <ButtonContainer>
      {children}
    </ButtonContainer>
  );
}

const ButtonContainer = styled.button`
  background: #F3B233;
  color: #fff;
  padding: 25px 36px;
  border: none;
  font-weight: bold;
  font-size: 16px;
  line-height: 124.2%;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
  transition: .3s all;

  &:hover {
    opacity: .95;
  }

  &:active {
    transform: scale(.95);
  }
`;