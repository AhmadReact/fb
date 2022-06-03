import React from 'react';
import "./Post.css";
import {Avatar} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NearMeIcon from "@mui/icons-material/NearMe";
import {ExpandMoreOutlined} from "@mui/icons-material";


function Post({profilePic, image, username, timestamp, message}) {
    
    return (
        <div className="post">

            <div className="post_top">
                <Avatar src={profilePic} 
                className="post_avatar" />

                <div className="post_topInfo">
                    <h3>{username}</h3>
                    <p>timestamp</p>
                </div>

            </div>


            <div className="post_bottom">
                <p>{message}</p>
            </div>

            <div className="post_image">
                <img src={image} alt=""/>
            </div>

            <div className="post_options">
                <div className="post_option">
                    <ThumbUpIcon/>
                    <p>Like</p>
                </div>

                <div className="post_option">
                    <ChatBubbleOutlineIcon/>
                    <p>Comment</p>
                </div>

                <div className="post_option">
                    <NearMeIcon/>
                    <p>Share</p>
                </div>

                <div className="post_option">
                    <AccountCircleIcon/>
                    <ExpandMoreOutlined/>
                </div>

            </div>

        </div>
    )
}

export default Post
