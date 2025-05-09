import React, { useState } from 'react';
import {
    AppstoreOutlined,
    HomeOutlined,
    MessageOutlined,
    SendOutlined
} from '@ant-design/icons';

import { Link } from 'react-router';

import { Menu } from 'antd';

const items = [
    {
        label: <Link to='/'>Home</Link>,
        key: 'mail',
        icon: <HomeOutlined />
    },
    {
        label: <Link to='/chat'>Chat</Link>,
        key: 'app',
        icon: <MessageOutlined />
    },
    {
        label: <Link to='/send'>Send</Link>,
        key: 'send',
        icon: <SendOutlined />
    }
];
const Navigation = () => {
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return (
        <Menu
            onClick={onClick}
            selectedKeys={[current]}
            mode='horizontal'
            items={items}
        />
    );
};
export default Navigation;
