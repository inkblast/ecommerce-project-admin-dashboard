import React from 'react'
import { Button, TextField} from '@mui/material';
import { useContext } from 'react';
import { multiStepContext } from './StepContext';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

export default function SecondStep() {
    const {setStep ,userData, setUserData,submitData} = useContext(multiStepContext);
  return (
    <Box style={{mt:4, paddingLeft:"100px" }} sx={{ borderColor: 'grey.500' }}>
        <div>
            <TextField sx={{width: 400}} style={{ marginLeft:"60px"}} label="Category_ID" value={userData['cid']} onChange={(e)=>setUserData({...userData, 'cid' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} style={{ marginLeft:"60px"}} label="Price" value={userData['price']} onChange={(e)=>setUserData({...userData, 'price' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} style={{ marginLeft:"60px"}} label="Stock Keeping Unit" value={userData['sku']} onChange={(e)=>setUserData({...userData, 'sku' :e.target.value})} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} style={{ marginLeft:"60px",marginTop:"40px"}} value={userData['photo']} onChange={(e)=>setUserData({...userData, 'photo' :e.target.value})} margin="normal" variant="outlined" color="secondary" type="file" />
        </div>
        <Stack sx={{ml:6,mt:5,paddingLeft:"80px"}} direction="row" spacing={3}>
            <Button variant="contained" color="secondary" onClick={()=>setStep(1)}>Back</Button>
            <Button variant="contained" color="primary" onClick={submitData}>Add Product</Button>
        </Stack>
    </Box>
  )
}
