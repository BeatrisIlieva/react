import { useState, useTransition } from 'react';

export default function UseTransition() {
    const [name, setName] = useState('');
    const [pending, startTransition] = useTransition();

    const submitClientAction = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const character = formData.get('character');

        // the inner function is called action
        startTransition(async () => {
            const response = await fetch(`https://swapi.py4e.com/api/people/${character}`);
            const result = await response.json();

            startTransition(() => {
                setName(result.name);
            });
        });
    };

    return (
        <>
            <h2>Use Transition</h2>

            <form onSubmit={submitClientAction}>
                <div>
                    <label htmlFor='character'>Character Number - {name}</label>
                    <input type='text' id='character' name='character' />
                </div>

                <div>
                    <input type='submit' value='Login' disabled={pending} />
                </div>
            </form>
        </>
    );
}
