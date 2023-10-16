import { Skill } from "../interfaces/IDemon.js";

const Demon = require("../models/Demon.js");
const Affinity = require("../models/Affinity.js");
const Evolution = require("../models/Evolution.js");

const demonQuery = async (gameTitle: string) => {
  let data = await Demon.find({ game: gameTitle });
  for (const d of data) {
    d.skills = remapSkills(d.skills);
  }
  return data;
};

const demonQueryByRace = async (gameTitle: string, race: string) => {
  let data = await Demon.find({
    $and: [{ game: gameTitle }, { race: race }],
  });
  for (const d of data) {
    d.skills = remapSkills(d.skills);
  }
  return data;
};

const demonQueryByName = async (gameTitle: string, name: string) => {
  let data = await Demon.find({
    $and: [{ game: gameTitle }, { name: name }],
  });
  for (const d of data) {
    d.skills = remapSkills(d.skills);
  }
  return data;
};

const demonQueryBySkills = async (gameTitle: string, skills: string[]) => {
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

const affinitiesQuery = async (gameTitle: string) => {
  let data = await Affinity.find({ game: gameTitle });
  return data;
};

const evolutionQuery = async (gameTitle: string) => {
  let data = await Evolution.find({ game: gameTitle });
  return data;
};

const remapSkills = (skills: any) => {
  let skillKeys = Object.keys(skills);
  let mappedSkills: Skill[] = [];
  for (const skill of skillKeys) {
    let name: string = skill;
    let level: any = skills[skill];
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
