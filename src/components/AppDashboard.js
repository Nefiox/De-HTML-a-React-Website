import React from 'react'
import Sidebar from './Sidebar'
import ContentWrapper from './ContentWrapper'

function AppDashboard() {
    return (
        <div id="wrapper">
            <Sidebar />
            <ContentWrapper />
        </div>
    );
}

export default AppDashboard;