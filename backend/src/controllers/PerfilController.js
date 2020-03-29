const conn = require('../database/connection');

module.exports = {
    async casosPorOng(request, response) {
        const ong_id = request.headers.authorization;
        const casos = await conn('casos')
            .where('ong_id', ong_id)
            .select('*');

        return response.json(casos);
    },
};