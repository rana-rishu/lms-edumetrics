import React, { Children } from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Protect = ({children}) => {
    const {user} =UserAuth();
    if (!user){
        return (<Navigate to = '/'/>)
    }
  return children 
};
export default Protect
