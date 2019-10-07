const mongoose = require('mongoose')

const Person = mongoose.model('Person')

module.exports = {
    async index(req, res) {
        const  people = await Person.find()

        return res.json(people)
    },

    async store(req, res) {
        const person = await Person.create(req.body)

        return res.json(person)
    },

    async show(req, res) {
        const person = await Person.findById(req.params.id)

        return res.json(person)
    },

    async update(req, res) {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new:true })

        return res.json(person);
    },

    async destroy(req, res) {
        await Person.findByIdAndRemove(req.params.id)

        return res.send()
    }
}