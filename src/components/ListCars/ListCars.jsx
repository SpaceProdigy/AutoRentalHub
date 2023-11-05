import CircularLoader from 'utility/CircularLoader/CircularLoader';
import photoNotFound from '../../images/foto_not_found.png';
import {
  Button,
  Description,
  FavoriteBorderIconStyled,
  FavoriteIconStyled,
  IconBattonFaivorit,
  Image,
  ImgContainer,
  Item,
  List,
  Title,
  TitleAccent,
  TitlePrice,
  TitleSection,
  WrapperInfo,
} from './ListCars.styled';
import {
  addToFavorite,
  getFavoriteChangeButton,
  removeFromFavorite,
} from 'redux/favoriteSlice';
import { useSelector } from 'react-redux';

const ListCars = ({ cars, favorite, dispatch, handleOpen, setMoreInfo }) => {
  const buttonVisibility = useSelector(getFavoriteChangeButton);
  const handleFavorite = car => {
    const deleteCar = favorite?.filter(({ id }) => id === car.id);
    if (deleteCar.length === 0) {
      dispatch(addToFavorite(car));
    } else {
      dispatch(removeFromFavorite(car));
    }
  };

  return (
    <>
      {cars ? (
        <List>
          {cars?.map(
            (
              {
                id,
                make,
                model,
                img,
                mileage,
                rentalCompany,
                rentalPrice,
                type,
                year,
                address,
              },
              index,
              car
            ) => {
              const fullAddress = address.split(',');
              const country = fullAddress[fullAddress.length - 1];
              const city = fullAddress[fullAddress.length - 2];

              return (
                <Item key={id}>
                  <ImgContainer>
                    <IconBattonFaivorit
                      onClick={() => handleFavorite(car[index])}
                    >
                      {buttonVisibility?.includes(id) ? (
                        <FavoriteIconStyled />
                      ) : (
                        <FavoriteBorderIconStyled />
                      )}
                    </IconBattonFaivorit>
                    <Image
                      onClick={() => {
                        setMoreInfo(car[index]);
                        handleOpen();
                      }}
                      src={img ? img : photoNotFound}
                      alt="car-photo"
                    />
                  </ImgContainer>

                  <WrapperInfo>
                    <TitleSection>
                      <Title>
                        {make}
                        <TitleAccent>{` ${model}`}</TitleAccent>, {year}
                      </Title>
                      <TitlePrice>{rentalPrice}</TitlePrice>
                    </TitleSection>
                    <Description>
                      <p>{country}</p>
                      <p>{city}</p>
                      <p>{rentalCompany}</p>
                      <p>{type}</p>
                      <p>{make}</p>
                      <p>{mileage}</p>
                    </Description>
                  </WrapperInfo>
                  <Button
                    onClick={() => {
                      setMoreInfo(car[index]);
                      handleOpen();
                    }}
                  >
                    Learn more
                  </Button>
                </Item>
              );
            }
          )}
        </List>
      ) : (
        <CircularLoader />
      )}
    </>
  );
};

export default ListCars;
