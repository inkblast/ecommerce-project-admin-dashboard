import React,{ useContext } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import {Stepper,StepLabel,Step} from '@mui/material';
import { multiStepContext } from './StepContext';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';

//`calc(100% - ${drawerWidth}px)`
export default function Addproduct() {
   //const drawerWidth = 240;

    const { currentStep} = useContext(multiStepContext)

    function ShowStep(step) {
        switch(step){
            case 1 :
                return <FirstStep />
            case 2 :
                return <SecondStep />
        }
    }
  return (
    <div>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm:"800px" },
            border:3,
            borderRadius: '16px',
            borderColor: 'primary.main'
          }}
          style={{ marginLeft: "540px",marginTop: "100px" }}
        >
          <Typography sx={{paddingLeft:'250px', fontWeight: '700'}} color="primary" variant="h4" gutterBottom>Add Product</Typography>
        <Stepper style={{ width:"90%", margin:"25px"}} activestep={currentStep -1} orientation="horizontal">
            <Step>
                <StepLabel></StepLabel>
            </Step>
            <Step>
                <StepLabel></StepLabel>
            </Step>
        </Stepper>
        <div>
           {ShowStep(currentStep)} 
        </div>
        </Box>
    </div>
  )
}
