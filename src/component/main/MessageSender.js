import React, { useState } from 'react';
import "./MessageSender.css";
import {Avatar} from "@mui/material";

import VideocamIcon from "@mui/icons-material/Videocam";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";


function MessageSender() {


    
    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar src="" />
                <form>
                    <input value="" onChange="" className="messageSender_input" placeholder={`What's on your mind, ?`}/>
                    
                    <input value="" onChange="" placeholder="Image URL (Optioanl)"/>
                
                    <button onClick="" type="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>


            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>

                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
            
        </div>
    )
}

export default MessageSender
