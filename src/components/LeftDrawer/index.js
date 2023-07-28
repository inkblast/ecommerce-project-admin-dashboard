import React  from 'react';
import { useNavigate }  from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Header from '../Header';
import Link from '@mui/material/Link';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ReceiptIcon from '@mui/icons-material/Receipt';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
//import Layout from '../../layout/Layout';
import DashboardIcon from '@mui/icons-material/Dashboard';
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TreeView from '@mui/lab/TreeView';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import TreeItem, { treeItemClasses } from '@mui/lab/TreeItem';  
import CategoryIcon from '@mui/icons-material/Category';
import DiscountIcon from '@mui/icons-material/Discount';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

//import AdminBoard from '../../containers/Dashboard/AdminBoard';

const drawerWidth = 240;

function LeftDrawer() {

  const navigate = useNavigate()

  const StyledTreeItemRoot = styled(TreeItem)(({ theme }) => ({
    color: theme.palette.text.secondary,
    [`& .${treeItemClasses.content}`]: {
      color: theme.palette.text.secondary,
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      fontWeight: theme.typography.fontWeightMedium,
      '&.Mui-expanded': {
        fontWeight: theme.typography.fontWeightRegular,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
      '&.Mui-focused, &.Mui-selected, &.Mui-selected.Mui-focused': {
        backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
        color: 'var(--tree-view-color)',
      },
      [`& .${treeItemClasses.label}`]: {
        fontWeight: 'inherit',
        color: 'inherit',
      },
    },
    [`& .${treeItemClasses.group}`]: {
      marginLeft: 0,
      [`& .${treeItemClasses.content}`]: {
        paddingLeft: theme.spacing(2),
      },
    },
  }));

  function StyledTreeItem(props) {
    const {
      bgColor,
      color,
      labelIcon: LabelIcon,
      labelText,
      ...other
    } = props;
  
    return (
      <StyledTreeItemRoot
        label={
          <Box sx={{ display: 'flex', alignItems: 'center', pt: 1.5, pb:1.5 , pr: 0,}}>
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography variant="body2" sx={{ fontWeight: 'inherit', flexGrow: 1 }}>
              {labelText}
            </Typography>
          </Box>
        }
        style={{
          '--tree-view-color': color,
          '--tree-view-bg-color': bgColor,
        }}
        {...other}
      />
    );
  }

  StyledTreeItem.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    labelIcon: PropTypes.elementType.isRequired,
    labelText: PropTypes.string.isRequired,
  };
  
  /*const routes = [
    "/product",
    "/deliveries",
    "/analysis",
    "/credit-notes",
    "/order-management",
    "/stock-management",
  ];*/
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Header />
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <div style={{marginTop:'75px'}}> 
            <Toolbar>
            <DashboardIcon style={{color:"#145DA0",padding:'2px',marginBottom:'6px'}} />
                <Typography variant="h6" noWrap component="div" gutterBottom>
                    Admin Dashboard
                </Typography>
            </Toolbar>
        </div>
        <Divider />
        <Box sx={{ overflow: 'auto' }}>
            <div style={{paddingLeft:'10px'}}>
                <span>Overview</span>
            </div>
          <TreeView
            aria-label="multi-select"
            //defaultCollapseIcon={<ChevronRightIcon />}
            //defaultExpandIcon={<ChevronRightIcon />}
            multiSelect
            sx={{ height: 380, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
          >
            <StyledTreeItem nodeId="1" labelText="Product" labelIcon={KeyboardDoubleArrowRightIcon } >
              <StyledTreeItem 
                labelText="Product"
                labelIcon={PostAddIcon}
                color="#1a73e8"
                bgColor="#e8f0fe"
                nodeId="2"
                onClick={()=>navigate('/product')}
                />
              <StyledTreeItem 
                nodeId="3" 
                labelText="Category"
                labelIcon={CategoryIcon}
                color="#1a73e8"
                bgColor="#e8f0fe"
                onClick={()=>navigate('/category')}
              />
              <StyledTreeItem 
                nodeId="4" 
                labelText="Promotion"
                labelIcon={DiscountIcon}
                color="#1a73e8"
                bgColor="#e8f0fe"
                onClick={()=>navigate('/promotion')}
              />
            </StyledTreeItem>
            <StyledTreeItem nodeId="5" 
                labelText="Deliveries" 
                labelIcon={LocalShippingIcon}
                color="#1a73e8"
                bgColor="#e8f0fe" 
            /> 
            <StyledTreeItem nodeId="6" 
                labelText="Analysis"
                labelIcon={EqualizerIcon}
                color="#1a73e8"
                bgColor="#e8f0fe" /> 
            <StyledTreeItem nodeId="7"
              labelText="Credit Notes"
              labelIcon={ReceiptIcon}
              color="#1a73e8"
              bgColor="#e8f0fe" 
            />
            <StyledTreeItem nodeId="8"
              labelText="Order Managment"
              labelIcon={EditNoteIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
            <StyledTreeItem nodeId="9" 
              labelText="Stock Management"
              labelIcon={DescriptionIcon}
              color="#1a73e8"
              bgColor="#e8f0fe"
            />
          </TreeView>
          <Divider />
            <div style={{paddingLeft:'10px'}}>
                    <span>Account Management</span>
            </div>
          <List>
            {['Profile', 'Settings'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index == 0 ? <PersonIcon /> : ''}
                    {index == 1 ? <SettingsIcon /> : ''}
                  </ListItemIcon>
                  <Link href="#" underline="none"><ListItemText primary={text} /></Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  )
}

export default LeftDrawer