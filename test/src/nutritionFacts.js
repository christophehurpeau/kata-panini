/* global suite, test */
import { deepStrictEqual } from 'assert';
import { ingredients, nutritionFacts } from '../..';

const { salad, cheese } = ingredients;

suite('nutritionFacts', () => {
  test('combine cheese and salad', () => {
    deepStrictEqual(nutritionFacts.combine([salad, cheese]), {
      vegan: salad.vegan && cheese.vegan,
      vegetarian: salad.vegetarian && cheese.vegetarian,
      pescetarian: salad.pescetarian && cheese.pescetarian,
      organic: salad.organic && cheese.organic,

      fat: salad.fat + cheese.fat,
      salt: salad.salt + cheese.salt,
      calories: salad.calories + cheese.calories,
    });
  });

  test('combine only salad', () => {
    deepStrictEqual(nutritionFacts.combine([salad]), {
      vegan: salad.vegan,
      vegetarian: salad.vegetarian,
      pescetarian: salad.pescetarian,
      organic: salad.organic,

      fat: salad.fat,
      salt: salad.salt,
      calories: salad.calories,
    });
  });
});
