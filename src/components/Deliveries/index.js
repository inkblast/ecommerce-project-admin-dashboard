import { Box } from '@mui/material'
import React from 'react'
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function Delivery(props) {
  const { products } = props;
  console.log('ado no',products);
  const drawerWidth = 240;
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
        style={{ marginLeft: "240px" }}
      >
      <h1>delevery Comming Soon........!</h1>
      
       <Toolbar />
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 300 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>No</TableCell>
                <TableCell>product_name</TableCell>
                <TableCell>product_quentity</TableCell>
                <TableCell>product_price</TableCell>
                <TableCell>cust_name</TableCell>
                <TableCell>cust_email</TableCell>
                <TableCell>cust_address</TableCell>
                <TableCell>cust_phone</TableCell>
                <TableCell>date_created</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            {console.log('kamal2',products)}
            <TableBody>
              {products.map((item, id) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{id + 1}</TableCell>
                  <TableCell>{item.product_name}</TableCell>
                  <TableCell>{item.product_quentity}</TableCell>
                  <TableCell>{item.product_price}</TableCell>
                  <TableCell>{item.cust_name}</TableCell>
                  <TableCell>{item.cust_email}</TableCell>
                  <TableCell>{item.cust_address}</TableCell>
                  <TableCell>{item.cust_phone}</TableCell>
                  <TableCell>{item.date_created}</TableCell>
                  <TableCell>{item.order_status}</TableCell>
                </TableRow>
              ))}
              </TableBody>
          </Table>
              </TableContainer> 
    </Box>
    </Box>
  )
}
Delivery.propTypes = {
  products: PropTypes.array.isRequired,
};


export default Delivery


