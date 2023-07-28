import React, { useState } from 'react';
import { Button, TextField} from '@mui/material';
import Box from '@mui/material/Box';
import axios from 'axios';
import Typography from '@mui/material/Typography';

export default function Addcategory() {

    const [des,setDes] = useState([""])
    const [name,setName] = useState([""])
    const [sdate,setSdate] = useState([""])
    const [edate,setEdate] = useState([""])

    const handleSubmit = async () =>
    {
        let formField = new FormData()
        formField.append('description', des)
        formField.append('name', name)
        formField.append('start_date', sdate)
        formField.append('end_date', edate)

        await axios({
            method: 'post',
            url: 'http://localhost:8000/products/pradd/',
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
        <Typography sx={{paddingLeft:'100px', fontWeight: '700'}} color="#546e7a" variant="h4" gutterBottom>Add Promotion</Typography>
        <div>
            <TextField sx={{width: 400}} label="Product Name"  onChange={(e)=>setName(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} label="Description"  onChange={(e)=>setDes(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} label="Start Date And Time"  placeholder="YYYY-MM-DD HH:MM" onChange={(e)=>setSdate(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <TextField sx={{width: 400}} label="End Date And Time"  placeholder="YYYY-MM-DD HH:MM" onChange={(e)=>setEdate(e.target.value)} margin="normal" variant="outlined" color="secondary" />
        </div>
        <div>
            <Button sx={{width: 400,mt:2}}  variant="contained" color="primary" onClick={()=>handleSubmit()}>Add</Button>
        </div>
    </Box>
  )
}