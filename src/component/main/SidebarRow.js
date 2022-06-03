import React from 'react';
import "./SidebarRow.css";
import {Avatar} from '@mui/material';


function SidebarRow({src, Icon ,title}) {

    
    const styile={

        marginBottom:"20px"
    
    
    }
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>}
            {Icon && <Icon />}

            <h4 style={styile}>{title}</h4>
        </div>
    )
}

export default SidebarRow
