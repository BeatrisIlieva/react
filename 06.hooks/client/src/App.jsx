import './App.css';

import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router';
import ChatPage from './components/ChatPage';
import HomePage from './components/HomePage';
import Send from './components/Send';

function App() {
    return (
        <>
            <Navigation />

            <Routes>
                <Route path='/chat' element={<ChatPage />} />
                <Route index element={<HomePage />} />
                <Route path='/send' element={<Send />} />
            </Routes>
        </>
    );
}

export default App;
