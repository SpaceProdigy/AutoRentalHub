import styled from 'styled-components';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

export const FavoriteBorderIconStyled = styled(FavoriteBorderIcon)`
  color: #ffffffcc;
  transition: var(--animation);
  &:hover {
    color: var(--background-favorite-icon);
    transform: scale(1.1);
  }
`;

export const FavoriteIconStyled = styled(FavoriteIcon)`
  color: var(--background-favorite-icon);
  transition: var(--animation);
  &:hover {
    color: var(--background-favorite-icon);
    transform: scale(1.1);
  }
`;

export const IconBattonFaivorit = styled.button`
  position: absolute;
  top: 16px;
  right: 15px;
  transition: var(--animation);
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  cursor: pointer;
`;

export const List = styled.ul`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 29px;
`;

export const WrapperLoader = styled.div`
  position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Item = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 274px;
  height: 268px;
  border-radius: 14px;
  box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 0.1);
  transition: var(--animation);
  overflow: hidden;
  cursor: zoom-in;
  &:hover {
    box-shadow: 0px 0px 22px -5px rgba(0, 0, 0, 1);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--animation);
`;

export const Button = styled.button`
  margin-top: 28px;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  background-color: var(--background-button-LearnMore);
  color: var(--button-text-color-LearnMore);
  padding: 12px 0;
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
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  color: var(--secondary-text-color);

  width: 200px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
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
    padding: 0 6px;
    border-right: 1px solid #1214171a;
    white-space: nowrap;
  }
  > p:last-child {
    border-right: none;
  }
`;
