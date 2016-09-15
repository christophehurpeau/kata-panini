import type { IngredientType, NutritionFactType } from './types';

export * as ingredients from './ingredients';

export class Panini {
  ingredients: Array<IngredientType>;

  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  nutritionFacts(): NutritionFactType {
    const result = {};

    ['vegan', 'vegetarian', 'pescetarian', 'organic'].forEach((key) => {
      result[key] = this.ingredients.every(ingredient => ingredient[key]);
    });

    ['fat', 'salt', 'calories'].forEach((key) => {
      result[key] = this.ingredients.reduce((total, ingredient) => total + ingredient[key], 0);
    });

    return result;
  }
}
