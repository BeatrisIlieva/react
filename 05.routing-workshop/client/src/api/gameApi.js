import request from '../utils/request';

const baseUrl = 'http://localhost:3030/data/games';

export default {
    async getAll() {
        const result = await request.get(baseUrl);

        const games = Object.values(result);

        return games;
    },

    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);
    },

    delete(gameId) {
        return request.delete(`${baseUrl}/${gameId}`);
    },

    update(gameId, gameData) {
        return request.put(`${baseUrl}/${gameId}`, {
            ...gameData,
            _id: gameId
        });
    }
};

export const useCreateGame = () => {
    const create = (gameData) => {
        return request.post(baseUrl, gameData);
    };

    return {
        create,
    }
};
