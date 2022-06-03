import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import { ExpandMoreOutlined } from '@mui/icons-material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import avatar from '../../images/avatar.jpg'
import { connect } from 'react-redux';

const Sidebar = (props) => {

   

  return (
    <div className="sidebar">
      <SidebarRow src={avatar} title={props.userData.userInfo.firstname+" "+props.userData.userInfo.surname+" "}/>
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"

      />
      <SidebarRow Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow Icon={ChatIcon} title="Messanger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}


const mapStateToProps = (state)=>{

return{



  userData :state.authReducer
}


}

export default connect(mapStateToProps)(Sidebar);