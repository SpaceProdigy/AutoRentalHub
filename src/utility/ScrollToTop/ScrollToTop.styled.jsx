import styled from 'styled-components';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

export const CircleUpStyled = styled(ArrowCircleUpIcon)`
  position: fixed;
  bottom: 50px;
  right: 20px;
  font-size: 50px;
  color: rgb(92, 91, 86);
  transition: var(--animation);
  cursor: pointer;
  z-index: 100;
  &:hover {
    color: var(--background-favorite-icon);
    transform: scale(1.1);
  }
`;
