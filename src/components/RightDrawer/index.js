import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AdminBoard from "../../containers/Dashboard/AdminBoard";
import Toolbar from '@mui/material/Toolbar';

function index() {
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{marginLeft:'240px'}}
      >
        <Toolbar />
        <AdminBoard />
      </Box>
    </Box>
  );
}

export default index;
