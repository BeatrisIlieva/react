import { useState, useActionState } from 'react';
import { useFormStatus } from 'react-dom';

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Not pending anymore');
        }, time);
    });
};

export default function UseActionState() {
    const submitAction = async (values) => {
        await wait(1500);

        return values;
    };

    const initialFormState = { username: '', password: '' };

    const [values, formAction, pending] = useActionState(action, initialFormState);

    return (
        <>
            <h2>UseActionState</h2>

            <form action={submitAction}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' id='username' name='username' />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='text' id='password' name='password' />
                </div>
                <Submit />
            </form>
        </>
    );
}

function Submit() {
    const { pending, data, method, action } = useFormStatus();
    console.log(data);

    return (
        <div>
            <input type='submit' value='Login' disabled={pending} />
        </div>
    );
}
