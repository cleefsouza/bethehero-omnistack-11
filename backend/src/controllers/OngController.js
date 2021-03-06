const crypto = require('crypto');
const conn = require('../database/connection');

module.exports = {
    async all(request, response) {
        const ongs = await conn('ongs').select('*');

        return response.json(ongs);
    },

    async create(request, response) {
        const { nome, email, whatsapp, cidade, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');

        await conn('ongs').insert({
            id,
            nome,
            email,
            whatsapp,
            cidade,
            uf
        });

        return response.json({ id });
    }
};