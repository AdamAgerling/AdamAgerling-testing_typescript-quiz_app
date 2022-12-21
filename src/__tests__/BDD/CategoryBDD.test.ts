import { loadFeature, defineFeature } from 'jest-cucumber';
import { Categories } from '../../components/TriviaFetch';

const feature = loadFeature('./specs/features/Category.feature');

export function getCategory(category: string): Categories {
  let value = (Categories as any)[category] as Categories;
  if (value === undefined) {
    throw new Error(`Incorrect Value`);
  }
  return value;
}

defineFeature(feature, (test) => {
  let getResult: Categories;

  test('Choose category', ({ given, when, then }) => {
    given(/^c: ([a-zA-Z]+)$/, (c) => {
      getResult = getCategory(c);
    });

    when('Picking a category', () => {
      // eslint-disable-next-line array-callback-return
      Object.keys(Categories).map((ExistingCategory) => {
        if (getResult === ExistingCategory) {
          console.log(getResult === ExistingCategory);
        }
      });
    });

    then(/^The picked category should be: ([a-zA-Z]+)$/, (expected) => {
      let result = getCategory(expected);
      console.log(result, getResult);
      expect(getResult).toBe(result);
    });
  });
});
