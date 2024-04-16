"use client"
import SideBarComponent from './SideBarComponent'
import BottomNavbar from './BottomNavbar'
import { useState } from 'react'

const MobileComponent = () => {
    const [isSidebar,setIsSidebar] = useState(false);

    return (
        <>
            <SideBarComponent isSidebar={isSidebar} setIsSidebar={setIsSidebar}/>
            <BottomNavbar setIsSidebar={setIsSidebar} />
        </>
    )
}

export default MobileComponent