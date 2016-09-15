/* global suite, test */
import { strictEqual } from 'assert';
import { ingredients } from '../../..';

const { cheese } = ingredients;

suite('Cheese', () => {
  test('is vegan', () => {
    strictEqual(cheese.vegan, false);
  });

  test('is vegetarian', () => {
    strictEqual(cheese.vegetarian, false);
  });

  test('is pescetarian', () => {
    strictEqual(cheese.pescetarian, false);
  });

  test('is organic', () => {
    strictEqual(cheese.organic, false);
  });

  test('has no fat', () => {
    strictEqual(cheese.fat, 80);
  });

  test('has no salt', () => {
    strictEqual(cheese.salt, 0);
  });
  test('has 50 calories', () => {
    strictEqual(cheese.calories, 20000);
  });
});
