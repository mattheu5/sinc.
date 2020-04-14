const connection = require('../database/connection')

module.exports = {
    async create(request, response) {
        const { id } = request.body

        const func = await connection('funcionarios').where('id', id).select('name').first()

        if(!func) {
            return response.status(400).json({ error: 'Nenhum funcionario foi achado com esse ID' })
        }

        return response.json(func)
    }
}