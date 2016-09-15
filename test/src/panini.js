/* global suite, test */
import { strictEqual, deepStrictEqual } from 'assert';
import { Panini, ingredients } from '../..';

const { salad, cheese } = ingredients;

suite('Panini', () => {
  test('ingredients length', () => {
    const panini = new Panini([salad, cheese]);
    strictEqual(panini.ingredients.length, 2);
  });

  test('nutritionFacts cheese and salad', () => {
    const panini = new Panini([salad, cheese]);
    deepStrictEqual(panini.nutritionFacts(), {
      vegan: salad.vegan && cheese.vegan,
      vegetarian: salad.vegetarian && cheese.vegetarian,
      pescetarian: salad.pescetarian && cheese.pescetarian,
      organic: salad.organic && cheese.organic,

      fat: salad.fat + cheese.fat,
      salt: salad.salt + cheese.salt,
      calories: salad.calories + cheese.calories,
    });
  });

  test('nutritionFacts only salad', () => {
    const panini = new Panini([salad]);
    deepStrictEqual(panini.nutritionFacts(), {
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
