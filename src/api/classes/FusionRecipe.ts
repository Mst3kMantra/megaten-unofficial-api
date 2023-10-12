import { IDemon } from "../interfaces/IDemon";

export class FusionRecipe {
  recipes: FusionRecipe[];

  constructor(public demon: IDemon) {
    this.demon = demon;
    this.recipes = [];
  }

  get skills() {
    let skills: string[] = [];
    skills.push(...this.demon.skills.map((s) => s.name));
    this.recipes.forEach((r) => skills.push(...r.skills));
    return skills.flat();
  }

  get ingredients() {
    let ingredients: string[] = [];
    ingredients.push(this.demon.name);
    this.recipes.forEach((r) => ingredients.push(...r.ingredients));
    return ingredients.flat();
  }
}
