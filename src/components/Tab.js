import React from 'react';
import styled from 'styled-components';

export default function Tab({ id, icon, label, onClick }) {
  return (
    <RadioButtonWrapper>
      <Input
        id={id}
        type="radio"
        name="radio"
        value={label}
        checked
        readOnly
      />
      <Label htmlFor={id}
        onClick={() => onClick(label)}>
        {icon}
        <LabelText>{label}</LabelText>
      </Label>
    </RadioButtonWrapper>
  );
}

const RadioButtonWrapper = styled.div`
  display: inline-block;
  background: #0E152F;

  &:not(:first-child) {
    margin-right: 11px;
  }

  input[type=radio]:checked + label {
    border-bottom: 2px solid #F3B233;
  }
`;

const Input = styled.input`
  display: none;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
	cursor: pointer;
  user-select: none;
  width: 163px;
  height: 94px;
  border-bottom: 2px solid transparent;
`;

const LabelText = styled.p`
  color: #fff;
  font-weight: bold;
  line-height: 124.2%;
  font-size: 12px;
  margin: 14px 0 0;
  text-transform: uppercase;
`;