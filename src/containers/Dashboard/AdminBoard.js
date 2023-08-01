import React, { Fragment } from "react";
import Product from "../../components/Product";
import Delivery from "../../components/Deliveries";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import Stack from "@mui/material/Stack";

function AdminBoard() {
  return (
    <Fragment>
      <div style={{ display: "flex" }}>
        <IconButton>
          <DashboardIcon style={{ color: "#145DA0" }} />
        </IconButton>
        <Typography variant="h4">Dashboard</Typography>
      </div>

      <Stack direction="row" spacing={2}>
        <Product />
        <Delivery />
        <Delivery />
      </Stack>
    </Fragment>
  );
}

export default AdminBoard

