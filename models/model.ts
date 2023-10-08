import {mongoose as mongo} from "../index";

const Schema = new mongo.Schema({
    name: {
        required: true,
        type: String
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = mongo.model('Data', Schema)