import React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import CategoryTable from './CategoryTable';

function Product()
{
  const drawerWidth = 240;
  
 return(
  <>
    
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
          style={{ marginLeft: "240px" }}
        >
          <CategoryTable />
        </Box>
        </Box>

  </>
 ) ;
}

export default Product