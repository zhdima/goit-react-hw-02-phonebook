import styled from 'styled-components';

export const Button = styled.button`
  margin-left: 8px;
  padding: 4px 16px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid grey;
  text-transform: capitalize;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  transition: box-shadow var(--animation-duration) var(--timing-function);

  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;