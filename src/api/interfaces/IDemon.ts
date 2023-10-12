import { Types } from "mongoose";

export interface IDemon {
  affinities?: Types.Array<number>;
  ailments?: string;
  lvl: number;
  price: number;
  race: string;
  resists: string;
  skills: Skill[];
  stats: Types.Array<string>;
  name: string;
  game: string;
  prereq?: string;
  estats?: Types.Array<number>;
  area?: string;
  drop?: string;
  isEnemy?: boolean;
  align?: string;
}

export type Skill = {
  name: string;
  level: number;
};
