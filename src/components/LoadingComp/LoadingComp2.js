import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingComp2() {
return (
    <Box sx={{ display: 'flex', mt:8}}>
    <CircularProgress />
    </Box>
);
}