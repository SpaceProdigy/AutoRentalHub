import styled from 'styled-components';

export const Button = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  color: #3470ff;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  padding: 0;
  margin: 0;
  transition: var(--animation);
  cursor: pointer;
  &:hover {
    color: var(--hover-effect-button);
  }
`;
