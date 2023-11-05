import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';

export const ButtonIcon = styled(CloseIcon)`
  color: #000;
  transition: var(--animation);
  cursor: pointer;
  &:hover {
    color: var(--hover-effect-button);
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
