import { useState } from 'react';

const wait = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Not pending anymore');
        }, time);
    });
};

export default function UnifiedControlledForm() {
    const [pending, setPending] = useState(false);
    const [values, setValues] = useState({
        username: '',
        password: '',
        remember: false
    });

    const submitHandler = async (e) => {
        setPending(true);

        e.preventDefault();

        await wait(1500);

        setPending(false);

        console.log({ username: values.username, password: values.password });
    };

    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.checked);

        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.type == 'checkbox' ? e.target.checked : e.target.value
        }));
    };

    return (
        <>
            <h2>UnifiedControlled Form</h2>

            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        onChange={changeHandler}
                        value={values.username}
                    />
                </div>

                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='text'
                        id='password'
                        name='password'
                        onChange={changeHandler}
                        value={values.password}
                    />
                </div>

                <div>
                    <label htmlFor='remember'>Remember me</label>
                    <input
                        type='checkbox'
                        id='remember'
                        name='remember'
                        checked={values.remember || false}
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <input type='submit' value='Login' disabled={pending} />
                </div>
            </form>
        </>
    );
}
