import { Routes, Route } from 'react-router';
import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
import GameCreate from './components/game-create/GameCreate';
import GameEdit from './components/game-edit/GameEdit';
import GameDetails from './components/game-details/GameDetails';
import GameCatalog from './components/game-catalog/GameCatalog';

import { UserContext } from './contexts/UserContexts';
import Logout from './components/logout/Logout';

function App() {
    const [authData, setAuthData] = useState({});

    const userLoginHandler = (resultData) => {
        setAuthData(resultData);
    };

    console.log(authData);

    return (
        <UserContext.Provider value={{ ...authData, userLoginHandler }}>
            <div id='box'>
                <Header />

                <main id='main-content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/games' element={<GameCatalog />} />
                        <Route path='/games/create' element={<GameCreate />} />
                        <Route
                            path='/games/:gameId/details'
                            element={<GameDetails />}
                        />
                        <Route
                            path='/games/:gameId/update'
                            element={<GameEdit />}
                        />
                        <Route path='/logout' element={<Logout />} />
                    </Routes>
                </main>
            </div>
        </UserContext.Provider>
    );
}

export default App;
