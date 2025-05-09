const request = async (method, url, data, options = {}) => {

    if (method != 'GET') {
        options.method = method;
    }

    if (data) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
            body: JSON.stringify(data)
        };
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        return result;
    } catch (err) {
        console.log(err.message);
    }
};

export default {
    get: request.bind(null, 'GET'),
    // get: (params) => request('GET', params),
    post: request.bind(null, 'POST'),
    put: request.bind(null, 'PUT'),
    delete: request.bind(null, 'DELETE')
};
