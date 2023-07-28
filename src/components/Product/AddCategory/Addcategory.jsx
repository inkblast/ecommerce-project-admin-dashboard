import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';

export default function Addcategory() {

    const [cid,setCid] = useState([""])
    const [name,setName] = useState([""])

    const handleSubmit = async () =>
    {
        let formField = new FormData()
        formField.append('category_id', cid)
        formField.append('name', name)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/products/cadd/',
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })
    }

  return (
    <Box style={{ paddingLeft:"180px",marginLeft: "540px",marginTop: "100px", paddingBottom: "100px", paddingTop: "100px" }}
    component="main"
    sx={{
      flexGrow: 1,
      p: 3,
      width: { sm:"800px" },
      border:3,
      borderRadius: '16px',
      borderColor: 'primary.main'
    }}
    >
        <Typography sx={{paddingLeft:'100px', fontWeight: '700'}} color="#546e7a" variant="h4" gutterBottom>Add Category</Typography>
        <div>
            <TextField sx={{width: 400}} label="Category ID"  onChange={(e)=>setCid(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} label="Product Name"  onChange={(e)=>setName(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <Button sx={{width: 400,mt:2}}  variant="contained" color="primary" onClick={()=>handleSubmit()}>Add</Button>
        </div>
    </Box>
  )
}
