/* global suite, test */
import { strictEqual } from 'assert';
import { ingredients } from '../../..';

const { salad } = ingredients;

suite('Salad', () => {
  test('is vegan', () => {
    strictEqual(salad.vegan, true);
  });

  test('is vegetarian', () => {
    strictEqual(salad.vegetarian, true);
  });

  test('is pescetarian', () => {
    strictEqual(salad.pescetarian, true);
  });

  test('is organic', () => {
    strictEqual(salad.organic, true);
  });

  test('has no fat', () => {
    strictEqual(salad.fat, 0);
  });

  test('has no salt', () => {
    strictEqual(salad.salt, 0);
  });
  test('has 50 calories', () => {
    strictEqual(salad.calories, 50);
  });
});
