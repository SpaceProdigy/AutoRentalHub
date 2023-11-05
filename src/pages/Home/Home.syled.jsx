import styled from 'styled-components';

import image from '../../images/hero.jpg';

export const Hero = styled.div`
  max-width: 1440px;
  width: 100vw;
  height: 100vh;
  background-image: url(${image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  padding: 10px 20px;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff90;
  background-color: #19141790;
  border-radius: 30px;
`;
