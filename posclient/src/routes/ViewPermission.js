import React from 'react';
import Permissions from '../components/Permissions';
import CreatePermission from './CreatePermission';
import AppLayout from '../components/AppLayout';

const ViewPermission = () => {
    return (
        <div>
            <AppLayout />   

            <div className="container">
            <CreatePermission />            
            <Permissions name='NEW_PERMISSION'/>   
            </div>                         
        </div>
    );
}

export default ViewPermission;