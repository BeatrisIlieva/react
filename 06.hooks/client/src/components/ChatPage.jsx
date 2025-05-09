import { useState } from 'react';
import Chat from './Chat';
import useFetch from '../hooks/useFetch';
import { Spin } from 'antd';

const url = 'http://localhost:3030/jsonstore/messages';

export default function ChatPage() {
    const [pending, messages] = useFetch(url, []);

    return (
        <>
            {pending ? (
                <Spin />
            ) : (
                <Chat message={messages} />
            )}
        </>
    );
}
