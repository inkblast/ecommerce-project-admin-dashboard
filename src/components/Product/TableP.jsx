import React ,{ useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import {Button} from '@mui/material';
import axios from 'axios';
import { Input } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
//import Grid from '@mui/material/Grid';

function TableP()
{
  const [details , setDetails] = useState([])
  const [editId , setEditId] = useState(-1)
  const [editCid , setCid] = useState(-1)
  const [uproduct_name,setProduct_name] = useState("")
  const [uproduct_details,setProduct_details] = useState("")
  const [uquantity, setQuantity] = useState()
  const [uprice , setPrice] = useState()
  //const [uimage, setImage] = useState()
  const navigate = useNavigate()

    useEffect(()=>{
        fetch('http://localhost:8000/products/plist/')
        .then(resp=> resp.json())
        .then(resp => setDetails(resp)
        //.catch(error => console.log(error))
        )
    },[])

    const updateProduct = (id,cid) => {
        axios.get('http://127.0.0.1:8000/products/'+id)
        .then(res =>{
          setProduct_details(res.data.description)
          setProduct_name(res.data.name)
          setQuantity(res.data.quantity)
          setPrice(res.data.price)
        })
        setCid(cid);
        setEditId(id);
    }

    const handleUpdate = async() => {
      /*let formField = new FormData()
        formField.append('category_id', editCid)
        formField.append('name', uproduct_name)
        formField.append('description', uproduct_details)
        formField.append('quantity', uquantity)
        formField.append('price', uprice)

        await axios({
            method: 'put',
            url: 'http://127.0.0.1:8000/products/'+editId,
            data: formField
        }).then((response)=>{
            console.log(response.data);
            location.reload();
        })*/
      axios.put('http://127.0.0.1:8000/products/'+editId, {category_id:editCid ,quantity:uquantity ,name:uproduct_name , description:uproduct_details, price:uprice })
      .then(res => {
        console.log(res);
        setEditId(-1);
        setCid(-1);
        location.reload(); 
      }).catch(err => console.log(err));
      location.reload();
    
    }


    const deleteProduct = (id) => {
      const confirm = window.confirm("Would Like To Delete This Product?");
      if(confirm){
        axios.delete('http://127.0.0.1:8000/products/'+id) 
        location.reload();
      }
    }
    return(
        <>
          <Stack spacing={6} direction="row" sx={{ m:3}}>
            <Button style={{backgroundColor:'#448aff', color: 'white', height:'40px'}} variant="contained" onClick={()=>navigate('addproduct')}  startIcon={<AddShoppingCartIcon />}>Add Product</Button>
          </Stack>
          <div>
            <TableContainer component={Paper}>
      <Table style={{
              pl:20,
              m: 'auto'}} 
              aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Product ID</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Category ID</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Product Name</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Product Details</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Price</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Qunatity</TableCell>
            <TableCell align="center" style={{backgroundColor:'#e8eaf6', color: 'black',}}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {details.map((product, index) => ( 
          product.id === editId ?
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" width="125px">
              {product.id}
              </TableCell>
              <TableCell component="th" scope="row" align="center" width="150px">
              <Input
                type="text"
                value={editCid}
                onChange={(e)=>setCid(e.target.value)} 
                />
              </TableCell>
              <TableCell  align="center" width="300px">
                <Input
                type="text"
                value={uproduct_name}
                onChange={(e)=>setProduct_name(e.target.value)} 
                />
              </TableCell>
              <TableCell align="center" width="500px">
                <Input
                type="text"
                value={uproduct_details}
                onChange={(e)=>setProduct_details(e.target.value)}
                />
              </TableCell>
              <TableCell align="center" width="500px">
                <Input
                type="text"
                value={uprice}
                onChange={(e)=>setPrice(e.target.value)}
                />
              </TableCell>
              <TableCell align="center" width="100px">
                <Input
                type="text"
                value={uquantity}
                onChange={(e)=>setQuantity(e.target.value)}
                />
              </TableCell>
              <TableCell  align="center"><Button color="success" variant="outlined" onClick={()=>handleUpdate()}  startIcon={<DoneIcon />}>Done</Button>
              </TableCell>
            </TableRow>
            :
            <TableRow
            key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center" width="125px">{product.id}</TableCell>
              <TableCell align="center"  width="150px">{product.category_id}</TableCell>
              <TableCell align="center" width="300px">{product.name}</TableCell>
              <TableCell align="center" width="500px">{product.description}</TableCell>
              <TableCell align="center" width="100px">{product.price}</TableCell>
              <TableCell align="center" width="100px">{product.quantity}</TableCell>
              <TableCell align="center" sx={{ mx:6 }}><Button color="success" variant="outlined" onClick={()=>updateProduct(product.id,product.category_id)}  startIcon={<EditIcon />}>Update</Button>
                <Button  color="error" variant="outlined"  onClick={() => deleteProduct(product.id)} startIcon={<ClearIcon />} sx={{ml:2}}>Delete</Button>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
            
            </div>
        </>
    )
}

export default TableP