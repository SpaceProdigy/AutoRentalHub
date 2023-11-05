import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars, getisLoading } from 'redux/carSlice';
import { fetchCar } from 'redux/operations';

import { getFavorite } from 'redux/favoriteSlice';
import ListCars from 'components/ListCars/ListCars';
import ButtonLoadMore from 'components/ButtonLoadMore/ButtonLoadMore';
import { ButtonWrapper } from './Catalog.styled';
import CircularLoader from 'utility/CircularLoader/CircularLoader';
import BasicModal from 'components/Modal/Modal';

const Catalog = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [moreInfo, setMoreInfo] = useState(null);

  const [page, setPage] = useState(1);
  const [visibleLoadMore, setVisibleLoadMore] = useState(false);
  const cars = useSelector(getCars);
  const favorite = useSelector(getFavorite);
  const isloading = useSelector(getisLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length % 12 !== 0) {
      setVisibleLoadMore(true);
    }
  }, [cars.length]);

  useEffect(() => {
    dispatch(fetchCar(page));
  }, [dispatch, page]);

  return (
    <>
      <ListCars
        cars={cars}
        favorite={favorite}
        dispatch={dispatch}
        handleOpen={handleOpen}
        setMoreInfo={setMoreInfo}
      />
      {isloading ? (
        <ButtonWrapper>
          <CircularLoader />
        </ButtonWrapper>
      ) : (
        <ButtonWrapper
          $hidden={visibleLoadMore}
          onClick={() => setPage(prevState => prevState + 1)}
        >
          <ButtonLoadMore />
        </ButtonWrapper>
      )}

      <BasicModal cars={moreInfo} open={open} handleClose={handleClose} />
    </>
  );
};

export default Catalog;
