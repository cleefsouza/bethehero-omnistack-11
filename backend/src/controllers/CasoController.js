const conn = require('../database/connection');

module.exports = {
    async all(request, response) {
        const { page = 1 } = request.query;
        const [count] = await conn('casos')
            .count();

        const casos = await conn('casos')
            .join('ongs', 'ongs.id', '=', 'casos.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select([
                'casos.*',
                'ongs.nome',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.cidade',
                'ongs.uf'
            ]);

        response.header('X-Total-Count', count['count(*)'])

        return response.json(casos);
    },

    async create(request, response) {
        const { titulo, descricao, valor } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await conn('casos').insert({
            titulo,
            descricao,
            valor,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const caso = await conn('casos')
            .where('id', id)
            .select('ong_id')
            .first();

        if (caso.ong_id !== ong_id) {
            return response.status(401).json({ erro: 'Operação não permitida.' })
        }

        await conn('casos')
            .where('id', id)
            .delete();

        return response.status(204).send();
    },
};