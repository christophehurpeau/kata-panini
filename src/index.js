import type { IngredientType, NutritionFactType } from './types';
import { combine as combineNutritionFacts } from './nutritionFacts';

export * as ingredients from './ingredients';

export class Panini {
  ingredients: Array<IngredientType>;

  constructor(ingredients) {
    this.ingredients = ingredients;
  }

  nutritionFacts(): NutritionFactType {
    return combineNutritionFacts(this.ingredients);
  }
}
