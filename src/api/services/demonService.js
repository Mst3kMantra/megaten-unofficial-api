"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Demon = require("../models/Demon.js");
const Affinity = require("../models/Affinity.js");
const Evolution = require("../models/Evolution.js");
const demonQuery = async (gameTitle) => {
    let data = await Demon.find({ game: gameTitle });
    for (const d of data) {
        d.skills = remapSkills(d.skills);
    }
    return data;
};
const demonQueryByRace = async (gameTitle, race) => {
    let data = await Demon.find({
        $and: [{ game: gameTitle }, { race: race }],
    });
    for (const d of data) {
        d.skills = remapSkills(d.skills);
    }
    return data;
};
const demonQueryByName = async (gameTitle, name) => {
    let data = await Demon.find({
        $and: [{ game: gameTitle }, { name: name }],
    });
    for (const d of data) {
        d.skills = remapSkills(d.skills);
    }
    return data;
};
const demonQueryBySkills = async (gameTitle, skills) => {
    let data = await Demon.find({ game: gameTitle });
    for (const d of data) {
        d.skills = remapSkills(d.skills);
    }
    let demonList = [];
    for (const d of data) {
        for (const s of d.skills) {
            for (const n of skills) {
                n == s.name && demonList.push(d);
            }
        }
    }
    return demonList;
};
const affinitiesQuery = async (gameTitle) => {
    let data = await Affinity.find({ game: gameTitle });
    return data;
};
const evolutionQuery = async (gameTitle) => {
    let data = await Evolution.find({ game: gameTitle });
    return data;
};
const remapSkills = (skills) => {
    let skillKeys = Object.keys(skills);
    let mappedSkills = [];
    for (const skill of skillKeys) {
        let name = skill;
        let level = skills[skill];
        mappedSkills.push({ name: name, level: level });
    }
    return mappedSkills;
};
module.exports = {
    demonQuery,
    demonQueryByRace,
    demonQueryByName,
    demonQueryBySkills,
    affinitiesQuery,
    evolutionQuery,
};
