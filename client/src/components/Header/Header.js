import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Header = () => (
    <>
        <div className='header'>
            <div>
                <Link to="">
                    <h2>Mocky-api</h2>
                </Link>
            </div>

            <div className='navbar'>
                <Link to="/">Home</Link>
                <Link to="/my-mocks">My Mocks</Link>
                <Link to="/mock/new">New Mock </Link>
            </div>
        </div >
    </>
);

export default Header;
