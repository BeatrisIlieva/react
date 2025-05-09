import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import BasicTimer from './components/BasicTimer';
import Counter from './components/counter';

function App() {
    return (
        <>
            <h1>Counter</h1>
            <Counter />
            <h1>Timers and counters</h1>
            <BasicTimer />
            <Header title='Hello from props!' />
            <Body />
        </>
    );
}

export default App;
