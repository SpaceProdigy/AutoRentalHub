import photoNotFound from '../../images/foto_not_found.png';
import { nanoid } from 'nanoid';
import CircularLoader from 'utility/CircularLoader/CircularLoader';
import {
  Description,
  Image,
  Title,
  ImgContainer,
  Item,
  TitleSection,
  WrapperInfo,
  WrapperLearnMore,
  TitleAccent,
  Button,
  MoreDescription,
  AccessoriesWrapeer,
  TitleDescription,
  RentalDescription,
  RentalWrapeer,
  ButtonCloseWrapper,
} from './LearnMore.styled';
import ButtonClose from 'components/ButtonClose/ButtonClose';

export default function LearnMore({ cars, handleClose }) {
  const {
    id,
    make,
    model,
    img,
    mileage,
    rentalPrice,
    type,
    year,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
  } = cars;

  const fullAddress = address.split(',');
  const country = fullAddress[fullAddress.length - 1];
  const city = fullAddress[fullAddress.length - 2];
  const conditions = rentalConditions.split('\n');
  const age = conditions[0].split(':')[1];
  const conditionsWithuotAge = conditions.slice(1, conditions.length);

  return (
    <WrapperLearnMore>
      <ButtonCloseWrapper onClick={handleClose}>
        <ButtonClose />
      </ButtonCloseWrapper>

      {cars ? (
        <Item key={id}>
          <ImgContainer>
            <Image src={img ? img : photoNotFound} alt="car-photo" />
          </ImgContainer>
          <WrapperInfo>
            <TitleSection>
              <Title>
                {make}
                <TitleAccent>{` ${model}`}</TitleAccent>, {year}
              </Title>
            </TitleSection>
            <Description>
              <p>{country}</p>
              <p>{city}</p>
              <p>{`Id:${id}`}</p>
              <p>{`Year:${year}`}</p>
              <p>{`Type:${type}`}</p>
              <p>{`Fuel Consumption::${fuelConsumption}`}</p>
              <p>{`Engine Size:::${engineSize}`}</p>
            </Description>
            <MoreDescription>{description}</MoreDescription>
          </WrapperInfo>
          <AccessoriesWrapeer>
            <TitleDescription>
              Accessories and functionalities:
            </TitleDescription>
            <Description>
              {[...functionalities, ...accessories]?.map((item, index) => (
                <p key={nanoid()}>{item}</p>
              ))}
            </Description>
          </AccessoriesWrapeer>
          <RentalWrapeer>
            <TitleDescription>Rental Conditions:</TitleDescription>
            <RentalDescription>
              <p>
                Minimum age:
                <span>{` ${age}`}</span>
              </p>
              {conditionsWithuotAge.map(item => (
                <p key={nanoid()}>{item}</p>
              ))}
              <p>
                Mileage:
                <span>{` ${mileage}`}</span>
              </p>

              <p>
                Price:
                <span>{` ${rentalPrice}`}</span>
              </p>
            </RentalDescription>
          </RentalWrapeer>

          <Button>Rental car</Button>
        </Item>
      ) : (
        <CircularLoader />
      )}
    </WrapperLearnMore>
  );
}
