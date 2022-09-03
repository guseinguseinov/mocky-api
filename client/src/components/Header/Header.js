import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Header = () => (
    <>
        <div className='header'>
            <div>
                <Link to="/home">
                    <h2>Mocky</h2>
                </Link>
            </div>

            <div className='navbar'>
                <Link className='my-mocks' to="/my-mocks">My Mocks</Link>
                <Link className='new-mock' to="/mock/new">New Mock </Link>
            </div>
        </div >
    </>
);

export default Header;
