```mermaid
  classDiagram
    Home <|-- Generic Quizname
    Home <|-- Quiz
    Quiz <|-- API


    class Generic Quizname {
        +String beakColor
        +swim()
        +quack()
    }
    class Home{
        -Input
        -Button(navigate to Quiz)
    }
    class Quiz{
        +bool is_wild
        +run()
    }


```
