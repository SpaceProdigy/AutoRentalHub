import * as React from 'react';
import Box from '@mui/material/Box';

import Modal from '@mui/material/Modal';

import LearnMore from 'components/LearnMore/LearnMore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export default function BasicModal({ cars, handleClose, open }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <LearnMore cars={cars} handleClose={handleClose} />{' '}
        </Box>
      </Modal>
    </div>
  );
}
