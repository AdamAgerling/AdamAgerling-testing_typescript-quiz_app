# Testing & Typescript Quiz App

# How to run the app

- Run `git clone https://github.com/AdamAgerling/AdamAgerling-testing_typescript-quiz_app.git` to clone the repo.
- Run `npm install` to install the dependencies.
- Run `npm start` to start the app.

# How to play the quiz

- Feel free to enter a name if you want, I say if you want because this is optional.
- Select one of the difficulties, either Easy, Medium, Hard or Random.
- Pick between the three randomly generated Categories.
- Click on the Start Quiz button.
- If the API is working as intended, randomly generated answers which are connected to the question should be visible.
- If you pick the correct answer you will have to choose a new randomly generated Category.
- Click on the "Next Question" button to go to the next question, and rinse and repeat.
- After you answer a question, you should be able to see your score which is calculated by the time you took to answer the question and the difficulty aswell as if you have answered correctly more than 3 times in a row you get a bonus.

# Diagrams

-Diagrams can be found in the diagrams folder src/Diagrams.

# Tests

- End-2-End tests.
- Unit tests.
- BDD tests.

# Test strategy

- TDD
- React testing library
- Cypress
- Jest

# Design principles

- DRY
- YAGNI
- KISS

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

- `npm test` will test 2 BDD test that checks if the category exists and one that tests the difficulty.
- `npm test` will also run a calculation mock.
- `npm run cy:run` will run a end to end test that checks if the game works correctly. Which the test will sometimes fail. But it has to do with disabled buttons which the test cannot click. 

## :memo: NOTE TO ANYONE WHO READS THIS :memo:
 ```diff
- TO RELIABLY TEST THIS THIS TEST YOU HAVE TO REMOVE THE "disabled={!category} from the button in src/components/QuizGame/index.tsx which can be found if you scroll all the way down in that document.
```
 
## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
