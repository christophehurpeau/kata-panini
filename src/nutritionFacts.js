import { NutritionFactType } from './types';

export function combine(nutritionFacts: Array<NutritionFactType>): NutritionFactType {
  const result = {};

  ['vegan', 'vegetarian', 'pescetarian', 'organic'].forEach((key) => {
    result[key] = nutritionFacts.every(ingredient => ingredient[key]);
  });

  ['fat', 'salt', 'calories'].forEach((key) => {
    result[key] = nutritionFacts.reduce((total, ingredient) => total + ingredient[key], 0);
  });

  return result;
}
