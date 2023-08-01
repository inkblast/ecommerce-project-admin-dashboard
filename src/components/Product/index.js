import React from "react";
import { CardActionArea, IconButton } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(number, product, status) {
  return { number, product, status};
}

const rows = [
  createData(57375453, "T'Shirt", "new"),
  createData(57375454, "Trouser", "new"),
  createData(57375455, "Cap", "new"),
];

function index() {
  return (
    <div>
      <Card sx={{ maxWidth: 350 }}>
        <CardActionArea>
          <CardContent>
            <div style={{ display: "flex" }}>
              <Typography gutterBottom variant="h6" component="div">
                Last Three Orders
              </Typography>
              <IconButton style={{ justifyContent: "flex-end" }}>
                <LibraryBooksIcon />
              </IconButton>
            </div>
            <Divider />
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Sales Number</TableCell>
                    <TableCell>Product Name</TableCell>
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
                      <TableCell >{row.product}</TableCell>
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
