import React, { Component } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//import Link from '@mui/material/Link';
import Button from "@mui/material/Button";
import { updateStatus } from "../../actions/orderManagementAction";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import axios from "axios";

{
  /* handleStatus(e) {
    const { name, value } = e.target;
    const { updateStatus } = this.props;
    var handleProduct = "false";
    updateStatus();
    const { product } = this.props;
    console.log(name);
    console.log(value);
    console.log(product);
    product.forEach((item) => {
        if (item.product_id == value.product_id) {
          // Add your code logic here
          handleProduct = "true";
        }
      });
    console.log(handleProduct);
  }*/
}

class OrderManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      produc: [],
    };
    this.handleStatus = this.handleStatus.bind(this);
  }

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/Shop_Order/");
      const todoList = await res.json();
      console.log(todoList);
      this.setState({
        todoList,
      });
    } catch (e) {
      console.log(e);
    }
  }
  componentDidUpdate(preProps) {
    const { product } = this.props;
    if (product !== preProps.product) {
      this.setState({ produc: product });
    }
  }
  handleStatus(e) {
    const { name, value } = e.target;
    const { todoList } = this.state;
    if (todoList[value - 1].order_status == "open") {
      axios
        .patch('http://127.0.0.1:8000/api/Shop_Order/' + value+'/', {
          order_status: "closed",
        })
        .then(() => {
          console.log("Update successful");
          // Handle the response or perform any additional actions
        })
        .catch((error) => {
          console.error("Error updating the order:", error);
          // Handle the error or display an error message
        });
        axios.post('http://127.0.0.1:8000/api2/Delivered/', {
            codesKey: todoList[value - 1].codesKey,
            product_name: todoList[value - 1].product_name,
            product_quentity: todoList[value - 1].product_quentity,
            product_price: todoList[value - 1].product_price,
            cust_name: todoList[value - 1].cust_name,
            cust_email: todoList[value - 1].cust_email,
            cust_address: todoList[value - 1].cust_address,
            cust_phone	: todoList[value - 1].cust_phone,
            date_created	: todoList[value - 1].date_created,
            order_status	: name,
        })
    }
    else if(todoList[value - 1].order_status == "closed")
    {
      axios.patch('http://127.0.0.1:8000/api2/Delivered/'+ value+'/' , {order_status:name})
    }
  }
  render() {
    const { todoList } = this.state;
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
          style={{ marginLeft: "240px" }}
        >
          <Toolbar />
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 300 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>codesKey</TableCell>
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
              {console.log(todoList)}
              <TableBody>
                {todoList.map((item, id) => (
                  <TableRow
                    key={id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{item.codesKey}</TableCell>
                    <TableCell>{item.product_name}</TableCell>
                    <TableCell>{item.product_quentity}</TableCell>
                    <TableCell>{item.product_price}</TableCell>
                    <TableCell>{item.cust_name}</TableCell>
                    <TableCell>{item.cust_email}</TableCell>
                    <TableCell>{item.cust_address}</TableCell>
                    <TableCell>{item.cust_phone}</TableCell>
                    <TableCell>{item.date_created}</TableCell>
                    <TableCell>
                      <Button
                        name="open"
                        value={item.codesKey}
                        onClick={this.handleStatus}
                      >
                        Open
                      </Button>
                      <Button
                        name="pending"
                        value={item.codesKey}
                        onClick={this.handleStatus}
                      >
                        Pending
                      </Button>
                      <Button
                        name="shiped"
                        value={item.codesKey}
                        onClick={this.handleStatus}
                      >
                        Shiped
                      </Button>
                      <Button
                        name="receive"
                        value={item.codesKey}
                        onClick={this.handleStatus}
                      >
                        Delivered
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    );
  }
}
OrderManagement.propTypes = {
  product: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateStatus: PropTypes.func.isRequired, // Add this line
};
const mapStateToProps = (state) => ({
  product: state.product.products,
});
const mapDispatchToProps = (dispatch) => ({
  updateStatus: () => dispatch(updateStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(OrderManagement);
