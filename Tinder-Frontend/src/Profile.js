import React from 'react';
import './Profile.css';
import Profilepic from './img/pofile_pic.jpg';


function Profile() {
    return (
        <div className="profile__data">
            <img className='profile__pic' src={Profilepic} alt="Profile_pic" />
            <h2>Jen, 25</h2>

        </div>
    )
}

export default Profile
