```mermaid
  classDiagram
    App <|-- Home
    App <|-- Quiz
    Home <|-- input
    Home <|-- Button
    Quiz <|-- QuizGame
    QuizGame <|-- Question
    QuizGame <|-- TriviaFetch

    class App {

    }

    class Home {

    }

    class Quiz {

    }

    class QuizGame {
      fetchQuestions()
    }

    class Question {

    }

   class TriviaFetch {

   }

```
