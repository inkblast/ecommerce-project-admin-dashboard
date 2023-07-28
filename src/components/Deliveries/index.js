import React from "react";
import { CardActionArea, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(number, date, status) {
  return { number, date, status};
}

const rows = [
  createData(57375453, "08/05", "shipped"),
  createData(57375454, "08/05", "open"),
  createData(57375455, "08/05", "canceled"),
];

function index() {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography gutterBottom variant="h6" component="div">
                Last Three Deliveries
              </Typography>
              <IconButton style={{ justifyContent: "flex-end" }}>
                <DeliveryDiningIcon />
              </IconButton>
            </div>
            <Divider />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sales Number</TableCell>
                    <TableCell>Order Date</TableCell>
                    <TableCell >Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.number}
                      </TableCell>
                      <TableCell >{row.date}</TableCell>
                      <TableCell >{row.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default index;
