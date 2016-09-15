'use strict';

var _assert = require('assert');

var _ = require('../..');

/* global suite, test */
const salad = _.ingredients.salad;


suite('Salad', () => {
  test('is vegan', () => {
    (0, _assert.strictEqual)(salad.vegan, true);
  });

  test('is vegetarian', () => {
    (0, _assert.strictEqual)(salad.vegetarian, true);
  });

  test('is pescetarian', () => {
    (0, _assert.strictEqual)(salad.pescetarian, true);
  });

  test('is organic', () => {
    (0, _assert.strictEqual)(salad.organic, true);
  });

  test('has no fat', () => {
    (0, _assert.strictEqual)(salad.fat, 0);
  });

  test('has no salt', () => {
    (0, _assert.strictEqual)(salad.salt, 0);
  });
  test('has 50 calories', () => {
    (0, _assert.strictEqual)(salad.calories, 50);
  });
});
//# sourceMappingURL=salad.js.map