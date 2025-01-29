import React from 'react'
import { UserAuth } from '../context/AuthContext'
import './profile.css'


const Profile = () => {
    const {user,logOut} = UserAuth()

    const handleSignOut = async () => {
        try{
            await logOut()
        }catch(error)
        {
            console.log(error)
        }

    }

    

return (
<div className="page-container">
    <div className="profile-card">
    <div className="profile-header">
        <div className="profile-image-container">
        <img src={user?.photoURL} alt="Profile" className="profile-image"/>
        </div>
        <h1 className="profile-name">{user?.displayName}</h1>
        <p className="profile-email">{user?.email}</p>
    </div>
    <div className="profile-content">
        {user?.displayName && (
        <button className="logout-button" onClick={handleSignOut}>
            Log Out
        </button>
        )}
    </div>
    </div>
</div>
  )
}

export default Profile
