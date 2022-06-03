import React, {useEffect, useState} from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {

    // to keep track of the post
    

    

    return (
        <div className="feed">
            {/* Story Reel */}
            <StoryReel/>
            {/* Message Sender */}
            <MessageSender/>
            {/* Post */}
            
            <Post
            key="1"
            profilePic=""
            message="asd"
            timestamp=""
            username=""  
            image=""
            />
      
        </div>
    )
}

export default Feed
