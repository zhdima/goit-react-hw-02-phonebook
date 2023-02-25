import styled from 'styled-components';

export const ContactItem = styled.li`
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 4px 0;
`;

export const Button = styled.button`
  margin-left: 8px;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  border: 1px solid grey;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.12);
  background-color: white;
  transition: box-shadow var(--animation-duration) var(--timing-function);

  :hover {
    background-color: lightblue;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
  }
`;