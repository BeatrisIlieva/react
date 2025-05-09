import { useState } from 'react';
import './App.css';
import ControlledForm from './components/ControlledForm';
import Popup from './components/Popup';
import UncontrolledForm from './components/UncontrolledForm';
import UnifiedControlledForm from './components/UnifiedControlledForm';
import UseRef from './components/UseRef';
import Dropdown from './components/Dropdown';
import FormAction from './components/FormAction';
import UseTransition from './components/UseTransition';
import UseActionState from './components/UseActionState';

function App() {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <UseActionState />
            <UseTransition />
            <FormAction />
            <UncontrolledForm />
            <ControlledForm />
            <UnifiedControlledForm />
            <UseRef />
            <Dropdown />
            <div>
                <button onClick={() => setShowPopup(true)}>Open Popup</button>
                {showPopup && (
                    <Popup onClose={() => setShowPopup(false)}>
                        <h2>This is a popup!</h2>
                        <p>Click outside or on the close button to dismiss.</p>
                    </Popup>
                )}
            </div>
        </>
    );
}

export default App;
