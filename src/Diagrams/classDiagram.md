```mermaid
  classDiagram
    "Generic Quizname" <|-- Home
    "Generic Quizname" <|-- Quiz
    Quiz <|-- API
    User : +int age
    User : +String gender
    User: +isMammal()
    User: +mate()

    class API{
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
