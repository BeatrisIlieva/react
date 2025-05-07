import { useEffect, useState, useRef } from 'react';

export default function UseRef() {
    const [count, setCount] = useState(0);
    const refMounted = useRef(false);

    useEffect(() => {
        if (refMounted.current) {
            console.log(count, 'updated');
        }

        refMounted.current = true;
    }, [count]);

    return (
        <>
            <h2>Use Ref</h2>
            <div>{count}</div>
            <button onClick={() => setCount((state) => state + 1)}>+</button>
        </>
    );
}
