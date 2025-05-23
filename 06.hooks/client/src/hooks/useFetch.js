import { useEffect, useState } from 'react';

export default function useFetch(url, defaultState = {}) {
    const [state, setState] = useState(defaultState);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        setPending(true);
        const abortController = new AbortController();

        fetch(url, { signal: abortController.signal })
            .then((response) => response.json())
            .then((result) => {
                setState(Object.values(result));
                setPending(false);
            })
            .finally(() => {
                setPending(false);
            });

        return () => {
            abortController.abort();
        };
    }, [url]);

    return [pending, state];
}
