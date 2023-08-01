import React from 'react'
import Layout from '../../layout/Layout'
import Box from '@mui/material/Box';
import RightDrawer from '../../components/RightDrawer'


function index() {
  return (
    <div>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <RightDrawer />
      </Box>
    </div>
  )
}

export default index