export const TIME: number = 33;
export const DIFFICULTY_POINTS = { easy: 1, medium: 3, hard: 5 };
export const TOTAL_QUESTIONS: number = 9;

// TODO
// KOLLA CLEAR INTERVALSKITEN. GOOGLE IT BITCH.

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
