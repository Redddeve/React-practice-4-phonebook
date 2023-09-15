import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
  padding: 10px;
  box-shadow: 0px 0px 5px 0px darkslategray;
  margin: 20px 0 40px;
`;

export const StyledLabel = styled.label`
  width: fit-content;
`;

export const StyledButton = styled.button`
  width: fit-content;
  padding: 8px 32px;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: teal;
    color: white;
  }
`;
