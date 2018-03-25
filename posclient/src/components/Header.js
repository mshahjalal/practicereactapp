import React from 'react';
import { Link } from 'react-router-dom';
import isAuthenticated from '../auth.js';


const Header = () => {
    return isAuthenticated() ? (
        <div>
            <nav className="navbar navbar-default bg-success">
                <div className="navbar-header">
                    <Link className="navbar-brand" key="/" to="/">Home</Link>            
                    <Link className="navbar-brand" key="/logout" to="/logout">Logout</Link>
                    <Link className="navbar-brand" key="/create-team" to="/create-team">Create Team</Link>
                    <Link className="navbar-brand" key="/view-team" to="/view-team">View Team</Link>
                    {/* <Link className="navbar-brand" key="/create-branch" to="/create-branch">Create Branch</Link> */}
                    <Link className="navbar-brand" key="/view-branch" to="/view-branch">View Branch</Link>
                </div>
            </nav>
        </div>
    ) : (
        <div>
            <nav className="navbar navbar-default bg-success">
                <div className="navbar-header">
                    <Link className="navbar-brand" key="/register" to="/register">Register</Link>
                    <Link className="navbar-brand" key="/login" to="/login">Login</Link>
                </div>
            </nav>
        </div>
    );
}

export default Header;