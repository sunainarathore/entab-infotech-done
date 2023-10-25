import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import TopNav from '../components/topnav/TopNav'
import NavBar from '../components/topnav/Navbar'

const MainLayout = () => {
    return (
        <>
            <div className="main">
                <div className="main__content">
                    <NavBar/>
                    <TopNav />
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default MainLayout
