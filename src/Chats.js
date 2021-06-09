import React from 'react'
import Chat from './Chat'
import "./Chats.css"

const Chats = () => {
    return (
        <div className="chats">
            <Chat 
            name= "Helen"
            message="Hey whats up!"
            timestamp="40 seconds ago"
            profilePic="https://material-ui.com/static/images/avatar/3.jpg"
            
            />
            <Chat 
            name= "Brock"
            message="Hey whats up!"
            timestamp="4 hours ago"
            profilePic="https://material-ui.com//static/images/avatar/2.jpg"
            
            />
            <Chat 
            name= "Tony"
            message="Hey whats up!"
            timestamp="3 days ago"
            profilePic="https://material-ui.com/static/images/avatar/1.jpg"
            
            />
        </div>
    )
}

export default Chats
