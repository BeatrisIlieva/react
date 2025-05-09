import { useState } from 'react';
import { useFormStatus } from 'react-dom';

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Not pending anymore');
        }, time);
    });
};

export default function FormAction() {
    const formActionHandler = async (formData) => {


        const username = formData.get('username');
        const password = formData.get('password');

        await wait(1500);
        console.log(username);
        
        console.log({ username, password });
    };

    return (
        <>
            <h2>Form Action</h2>

            <form action={formActionHandler}>
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
