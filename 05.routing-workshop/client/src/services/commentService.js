import request from '../utils/request';

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    async getAll(gameId) {
        const comments = await request.get(baseUrl);

        const gameComments = Object.values(comments).filter((comment) => comment.gameId == gameId);

        return gameComments;
    },

    async create(email, gameId, comment) {
        return await request.post(baseUrl, { email, gameId, comment });
    }
};
