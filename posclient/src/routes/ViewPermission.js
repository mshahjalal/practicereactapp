import React from 'react';
import Permissions from '../components/Permissions';
import CreatePermission from './CreatePermission';


const ViewPermission = () => {
    return (
        <div>
            <CreatePermission />            
            <Permissions name='NEW_PERMISSION'/>            
        </div>
    );
}

export default ViewPermission;