const baseUrl = 'http://localhost:3030/jsonstore/users';

export default {
    async getAll() {
        try {
            const response = await fetch(baseUrl);
            const result = await response.json();

            const users = Object.values(result);

            return users;
        } catch (err) {
            console.log(err.message);
        }
    },

    async getOne(userId) {
        try {
            const response = await fetch(`${baseUrl}/${userId}`);
            const result = await response.json();

            return result;
        } catch (err) {
            console.log(err.message);
        }
    },

    async create(userdata) {
        try {
            const response = await fetch(baseUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userdata)
            });

            const result = await response.json();

            return result;
        } catch (err) {
            console.log(err.message);
        }
    },

    async delete(userId) {
        try {
            await fetch(`${baseUrl}/${userId}`, {
                method: 'DELETE'
            });
        } catch (err) {
            console.log(err.message);
        }
    }
};
