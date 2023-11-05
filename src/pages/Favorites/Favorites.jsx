import { useDispatch, useSelector } from 'react-redux';

import { getFavorite } from 'redux/favoriteSlice';
import ListCars from 'components/ListCars/ListCars';
import { WrapperList } from './Favorites.styled';
import BasicModal from 'components/Modal/Modal';
import { useState } from 'react';

const Favorites = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const favorite = useSelector(getFavorite);
  const [moreInfo, setMoreInfo] = useState(null);
  console.log(moreInfo);
  const dispatch = useDispatch();

  return (
    <WrapperList>
      <ListCars
        cars={favorite}
        favorite={favorite}
        dispatch={dispatch}
        handleOpen={handleOpen}
        setMoreInfo={setMoreInfo}
      />
      <BasicModal cars={moreInfo} open={open} handleClose={handleClose} />
    </WrapperList>
  );
};

export default Favorites;
