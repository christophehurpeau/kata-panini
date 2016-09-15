'use strict';

var _assert = require('assert');

var _ = require('../..');

/* global suite, test */
const cheese = _.ingredients.cheese;


suite('Cheese', () => {
  test('is vegan', () => {
    (0, _assert.strictEqual)(cheese.vegan, false);
  });

  test('is vegetarian', () => {
    (0, _assert.strictEqual)(cheese.vegetarian, false);
  });

  test('is pescetarian', () => {
    (0, _assert.strictEqual)(cheese.pescetarian, false);
  });

  test('is organic', () => {
    (0, _assert.strictEqual)(cheese.organic, false);
  });

  test('has no fat', () => {
    (0, _assert.strictEqual)(cheese.fat, 80);
  });

  test('has no salt', () => {
    (0, _assert.strictEqual)(cheese.salt, 0);
  });
  test('has 50 calories', () => {
    (0, _assert.strictEqual)(cheese.calories, 20000);
  });
});
//# sourceMappingURL=cheese.js.map