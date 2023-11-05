import styled from 'styled-components';

export const WrapperLearnMore = styled.ul`
  position: relative;
  padding: 50px;
  background-color: #fff;
  border-radius: 24px;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
`;

export const ButtonCloseWrapper = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const Item = styled.li`
  max-width: 461px;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 461px;
  height: 248px;
  border-radius: 14px;
  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.1);
  transition: var(--animation);
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--animation);
`;

export const Button = styled.button`
  margin-top: 24px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  background-color: var(--background-button-LearnMore);
  color: var(--button-text-color-LearnMore);
  padding: 12px 50px;
  border-radius: 12px;
  border: none;
  transition: var(--animation);
  cursor: pointer;
  &:hover {
    background-color: var(--hover-effect-button);
  }
`;

export const WrapperInfo = styled.div`
  margin-top: 14px;
`;

export const Title = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  color: var(--secondary-text-color);

  width: 350px;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;

  &::-webkit-scrollbar {
    height: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
`;

export const TitleAccent = styled.span`
  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 18);
  color: var(--accent-text-color);
`;

export const TitlePrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  color: var(--secondary-text-color);
`;

export const TitleSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Description = styled.div`
  max-height: 40px;
  min-width: 270px;
  margin-top: 8px;
  margin-left: -6px;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }

  > p {
    font-size: 12px;
    font-weight: 400;
    line-height: calc(18 / 12);

    padding: 0 6px;
    border-right: 1px solid #1214171a;
    white-space: nowrap;
  }
  > p:last-child {
    border-right: none;
  }
`;

export const MoreDescription = styled.p`
  max-height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: calc(20 / 14);
  color: var(--secondary-text-color);
  margin-top: 14px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
`;

export const AccessoriesWrapeer = styled.div`
  margin-top: 24px;
`;

export const TitleDescription = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: calc(20 / 14);
  color: var(--secondary-text-color);
`;

export const RentalWrapeer = styled.div`
  margin-top: 24px;
`;

export const RentalDescription = styled.div`
  height: 72px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
  margin-left: -6px;
  gap: 8px;
  overflow: hidden;
  overflow-y: auto;

  > p {
    font-size: 12px;
    font-weight: 600;
    line-height: calc(18 / 12);
    letter-spacing: -0.02em;
    color: var(--rental-text-color);
    padding: 7px 14px 7px 14px;
    border-radius: 35px;
    background: #f9f9f9;
    > span {
      color: var(--accent-text-color);
    }
  }

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 8px;
  }
`;
