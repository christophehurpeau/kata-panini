'use strict';

var _assert = require('assert');

var _ = require('../..');

/* global suite, test */
const salad = _.ingredients.salad;
const cheese = _.ingredients.cheese;


suite('Panini', () => {
  test('ingredients length', () => {
    const panini = new _.Panini([salad, cheese]);
    (0, _assert.strictEqual)(panini.ingredients.length, 2);
  });

  test('nutritionFacts cheese and salad', () => {
    const panini = new _.Panini([salad, cheese]);
    (0, _assert.deepStrictEqual)(panini.nutritionFacts(), {
      vegan: salad.vegan && cheese.vegan,
      vegetarian: salad.vegetarian && cheese.vegetarian,
      pescetarian: salad.pescetarian && cheese.pescetarian,
      organic: salad.organic && cheese.organic,

      fat: salad.fat + cheese.fat,
      salt: salad.salt + cheese.salt,
      calories: salad.calories + cheese.calories
    });
  });

  test('nutritionFacts only salad', () => {
    const panini = new _.Panini([salad]);
    (0, _assert.deepStrictEqual)(panini.nutritionFacts(), {
      vegan: salad.vegan,
      vegetarian: salad.vegetarian,
      pescetarian: salad.pescetarian,
      organic: salad.organic,

      fat: salad.fat,
      salt: salad.salt,
      calories: salad.calories
    });
  });
});
//# sourceMappingURL=panini.js.map