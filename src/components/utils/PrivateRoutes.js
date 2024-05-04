import React from 'react'
import { Outlet, Navigate } from 'react-router'

const PrivateRoutes = (props) => {
    let auth ={'token': props.liberado}
    return (
        auth.token ? <Outlet/> : <Navigate to='/login'/> 
    )
}

export default PrivateRoutes
