import * as React from 'react';

//Material Ui
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

//CSS
import './LoadingComp.css'

export default function LinearColor() {
  return (
      <Stack sx={{ width: '100%', color: 'grey.500', mt:20 }} spacing={2} className='loadingComp'>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
  );
}
