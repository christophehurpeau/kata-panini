'use strict';

var _assert = require('assert');

var _ = require('../..');

/* global suite, test */
const salad = _.ingredients.salad;
const cheese = _.ingredients.cheese;


suite('nutritionFacts', () => {
  test('combine cheese and salad', () => {
    (0, _assert.deepStrictEqual)(_.nutritionFacts.combine([salad, cheese]), {
      vegan: salad.vegan && cheese.vegan,
      vegetarian: salad.vegetarian && cheese.vegetarian,
      pescetarian: salad.pescetarian && cheese.pescetarian,
      organic: salad.organic && cheese.organic,

      fat: salad.fat + cheese.fat,
      salt: salad.salt + cheese.salt,
      calories: salad.calories + cheese.calories
    });
  });

  test('combine only salad', () => {
    (0, _assert.deepStrictEqual)(_.nutritionFacts.combine([salad]), {
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
//# sourceMappingURL=nutritionFacts.js.map