export const TIME: number = 30;
export const DIFFICULTY_POINTS = {
  WRONGANSWER: 0,
  EASY: 1,
  MEDIUM: 3,
  HARD: 5,
};
export const TOTAL_QUESTIONS: number = 9;

export enum Difficulties {
  easy = 'Easy',
  medium = 'Medium',
  hard = 'Hard',
}

// TODO
// KOLLA CLEAR INTERVALSKITEN. GOOGLE IT BITCH.
// OM KORREKT SVAR: Disabla next question knappen om inte ny kategori är vald

// const Timer = () => {
//   const interval = setInterval(() => {
//     if (timer === TIME) {
//       clearInterval(interval);
//       setTimer(0);
//     }
//     if (correctAnswer?.correct) {
//       let points: number = 0;
//       switch (correctAnswer.difficulty) {
//         case 'easy':
//           points = DIFFICULTY_POINTS.easy;
//           break;
//         case 'medium':
//           points = DIFFICULTY_POINTS.medium;
//           break;
//         case 'hard':
//           points = DIFFICULTY_POINTS.hard;
//           break;
//       }
//       console.log(timer, 'if');
//       setTotalPoints(totalPoints + (TIME - timer) * points);
//       clearInterval(interval);
//       setTimer(0);
//     }
//     if (correctAnswer?.correct === false) {
//       clearInterval(interval);
//       setTimer(0);
//     }
//     setTimer(timer + 1);
//     console.log(timer);
//   }, 1000);
// };

// export function calculateScore(answers: Answer[]) {
//   let totalPoints = 0;
//   let correctCount = 0;

//   for (const answer of answers) {
//     if (answer.correct) {
//       totalPoints =
//         totalPoints + answer.timeLeft * DIFFICULTY_POINTS[answer.difficulty];
//       correctCount = correctCount + 1;
//     }
//   }
//   totalPoints = totalPoints + correctCount * longestStreak(answers);

//   return totalPoints;
// }

// function longestStreak(answers: Answer[]) {
//   let streakAnswers = 0;
//   let longest = 0;
//   for (const answer of answers) {
//     if (answer.correct) {
//       streakAnswers = streakAnswers + 1;
//       if (streakAnswers > longest) {
//         longest = streakAnswers;
//       }
//     } else {
//       streakAnswers = 0;
//     }
//   }
//   if (longest >= 3) {
//     return longest;
//   } else {
//     return 0;
//   }
// }
