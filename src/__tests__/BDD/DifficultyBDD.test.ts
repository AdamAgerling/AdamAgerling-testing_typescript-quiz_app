import { loadFeature, defineFeature } from 'jest-cucumber';

import { Difficulty } from '../../components/TriviaFetch';
const feature = loadFeature('./specs/features/Difficulty.feature');

export function getDifficulty(difficulty: string): Difficulty {
  let value = (Difficulty as any)[difficulty] as Difficulty;
  if (value === undefined) {
    throw new Error(`Incorrect Value`);
  }
  return value;
}

defineFeature(feature, (test) => {
  let expectedResult: Difficulty;

  test('Choose difficulty', ({ given, when, then }) => {
    given(/^d: ([a-zA-Z]+)$/, (d) => {
      expectedResult = getDifficulty(d);
    });

    when('Picking a difficulty', () => {
      // eslint-disable-next-line array-callback-return
      Object.keys(Difficulty).map((ExistingDifficulty) => {
        if (expectedResult === ExistingDifficulty) {
          console.log(expectedResult === ExistingDifficulty);
        }
      });
    });

    then(/^The picked difficulty should be: ([a-zA-Z]+)$/, (expected) => {
      let result = getDifficulty(expected);
      console.log(result, expectedResult);
      expect(expectedResult).toBe(result);
    });
  });
});
