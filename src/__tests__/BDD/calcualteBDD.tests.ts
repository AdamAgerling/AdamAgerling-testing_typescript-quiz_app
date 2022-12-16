import { loadFeature, defineFeature } from 'jest-cucumber';
import { Categories } from '../../components/TriviaFetch';
const feature = loadFeature('./specs/features/FetchQuestion.feature');

export function getCategory(category: string): Categories {
  let value = (<any>Categories)[category] as Categories;
  if (value === undefined) {
    throw new Error(`Mahdi's fel`);
  }
  return value;
}

defineFeature(feature, (test) => {
  let getResult: Categories;
  // let category: Categories;
  // let difficulty: string;

  test('Choose category', ({ given, when, then }) => {
    given(/^c: ([a-zA-Z]+)$/, (c) => {
      getResult = getCategory(c);
      // difficulty = arg1;
    });

    when('Picking a category', () => {
      // getResult = getCategory(category);
    });

    then(/^The picked category should be: ([a-zA-Z]+)$/, (expected) => {
      let result = getCategory(expected);
      console.log(result, getResult);
      expect(getResult).toBe(result);
    });
  });
});
