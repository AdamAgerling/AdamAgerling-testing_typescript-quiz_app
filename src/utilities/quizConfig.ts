export const TIME: number = 30;
export const DIFFICULTY_POINTS: any = {
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

// const Timer = () => {
//   const interval = setTimeout(() => {
//     if (timer === TIME) {
//       clearTimeout(interval);
//       setTimer(0);
//     }
//     if (correctAnswer?.correct) {
//       let points: number = 0;
//       switch (correctAnswer.difficulty) {
//         case 'wrong':
//           points = DIFFICULTY_POINTS.WRONGANSWER;
//           break;
//         case 'easy':
//           points = DIFFICULTY_POINTS.EASY;
//           break;
//         case 'medium':
//           points = DIFFICULTY_POINTS.MEDIUM;
//           break;
//         case 'hard':
//           points = DIFFICULTY_POINTS.HARD;
//           break;
//       }
//       console.log(timer, 'if');
//       setTotalPoints(totalPoints + (TIME - timer) * points);
//       clearTimeout(interval);
//       setTimer(0);
//     }
//     if (correctAnswer?.correct === false) {
//       clearTimeout(interval);
//       setTimer(0);
//     }
//     setTimer(timer + 1);
//     console.log(timer);
//   }, 1000);
// };
