import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 150px;
  visibility: ${props => (props.$hidden ? 'hidden' : 'visible')};
`;
