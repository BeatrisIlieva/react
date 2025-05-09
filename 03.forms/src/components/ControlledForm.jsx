import { useState } from 'react';

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Not pending anymore');
        }, time);
    });
};

export default function ControlledForm() {
    const [pending, setPending] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e) => {
        setPending(true);

        e.preventDefault();

        await wait(1500);

        setPending(false);

        console.log({ username, password });
    };

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    return (
        <>
            <h2>Controlled Form</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        onChange={usernameChangeHandler}
                        value={username}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        onChange={passwordChangeHandler}
                        value={password}
                    />
                </div>

                <div>
                    <input type='submit' value='Login' disabled={pending} />
                </div>
            </form>
        </>
    );
}
