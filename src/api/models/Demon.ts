import mongoose, { Schema, Types, Model } from 'mongoose';

interface Demon {
    affinities?: Types.Array<number>,
    ailments?: string,
    lvl: number,
    price: number,
    race: string,
    resists: string,
    skills?: object,
    stats: Types.Array<string>,
    name: string
}

const schema = new Schema<Demon, Model<Demon>>({
    affinities: {
        type: [Number]
    },
    ailments: {
        type: String
    },
    lvl: {
        type: Number
    },
    price: {
        type: Number
    },
    race: {
        type: String
    },
    resists: {
        type: String
    },
    skills: {
        type: Schema.Types.Mixed,
    },
    stats: {
        type: [Number]
    },
    name: {
        required: true,
        type: String
    }
})

const myDB = mongoose.connection.useDb('smt5DB');

module.exports = myDB.model('Demon', schema, 'demonData')