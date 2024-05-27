import React from 'react';
import ProfileHeader from './ProfileHeader';
import '../styles/profile.css';
import userImage from '../assets/im.png';
import employeeOfMonth from '../assets/5.png';

const Profile = () => {
    return (
        <div className="profile">
            <ProfileHeader />
            <div className="user--profile">
                <div className="user--detail">
                    <img src={userImage} alt="" className="user--image" />
                    <div className="user--info">
                        <h3 className="username">Anushka Singh</h3>
                        <span className="profession">UI/UX Developer</span>
                    </div>
                </div>
                <div className="employee--month">
                    <img src={employeeOfMonth} alt="Employee of the Month" className="employee--image" />
                    <h4 className="employee-text">Employee of the Month</h4>
                </div>
                <div className="user-courses"></div>
            </div>
        </div>
    );
};

export default Profile;