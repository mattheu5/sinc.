const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    async index(request, response){
        const funcionarios = await connection('funcionarios').select('*')
        
        return response.json(funcionarios)
    },

  async create(request, response) {
    const { name, email, whatsapp } = request.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('funcionarios').insert({
        id,
        name,
        email,
        whatsapp
    })

    return response.json({ id })
    },

    async delete(request, response){
        const { id } = request.params
        
        await connection('funcionarios').where('id', id).delete();
    }
}