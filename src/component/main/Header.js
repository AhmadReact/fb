import React, { useState } from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlined from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlined from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircle from '@mui/icons-material/SupervisedUserCircle';
import {Avatar} from "@mui/material";
import {IconButton} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ForumIcon from "@mui/icons-material/Forum";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import avatar from '../../images/avatar.jpg'
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import { connect } from 'react-redux';
import {signOut} from '../../action/index';
import { Link, useNavigate } from "react-router-dom";

const Header = (props)=> {

    // pull the user information
    let navigate = useNavigate();
    const [dropdown,setdropdown] =useState(0);

    const styile={

        marginBottom:"20px"
    
    
    }

    const handle=()=>{

        if(dropdown===1)
        {
            setdropdown(0);
        }
        else{

            setdropdown(1);
        }


    }

    const logout = () =>{

        props.signOut();

        navigate("/", { replace: true });



    }
  
    return (
        <div className="header">
            {/* Header is split into 3 areas : center, left & right */}
            
            <div className="header_left">
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt=""/>

                <div className="header_input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type="text"/>
                </div>
            </div>

            
            <div className="header_center">

                <div className="header_option  header_option--active">
                    <HomeIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <FlagIcon fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SubscriptionsOutlined fontSize = "large"/>
                </div>

                <div className="header_option">
                    <StorefrontOutlined fontSize = "large"/>
                </div>

                <div className="header_option">
                    <SupervisedUserCircle fontSize = "large"/>
                </div>

            </div>


            <div className="header_right">

                <div className="header_info">
                    <Avatar src={avatar} />
                    
                    <h4 className="h4" style={styile}>{props.userData.userInfo.firstname+" "} {props.userData.userInfo.surname+" "}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <ForumIcon />
                </IconButton>

                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>

                <IconButton onClick={()=>handle()}>
                    <ExpandMoreIcon />
                </IconButton>


            {dropdown==1 &&

                <Paper sx={{ width: 320, maxWidth: '100%' }} className="dropdown">
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Setting and privacy</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘X
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <HelpOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Help and Support</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘C
          </Typography>
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <FeedbackIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>Give feedback</ListItemText>
          <Typography variant="body2" color="text.secondary">
            ⌘V
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={logout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText >Log out</ListItemText>
        </MenuItem>
      </MenuList>
    </Paper>
            }
            </div>


            
        </div>
    )
}

const mapStateToProps = (state) =>{

    return{
    userData :state.authReducer
  }
}



export default connect(mapStateToProps,{signOut})(Header);
