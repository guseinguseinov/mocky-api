import React from 'react';
import { Menu, Layout } from 'antd';
import { Link, Navigate } from 'react-router-dom';
import './styles.css';

const { Header } = Layout;

const CustomHeader = () => (
    <>
        <Header>
            <Menu theme="dark" mode="horizontal">
                <Menu.Item key={1}  >
                    MOCKY
                    <Link to="/home" />
                </Menu.Item>

                <Menu.Item key={2} >
                    MANAGE MY MOCKS
                    <Link to="/my-mocks" />
                </Menu.Item>
                <Menu.Item key={3}>
                    NEW MOCK
                    <Link to="/mock/new" />
                </Menu.Item>
            </Menu>
        </Header>
    </>
);

export default CustomHeader;
