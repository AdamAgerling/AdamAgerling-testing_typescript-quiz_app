```mermaid
  sequenceDiagram
      participant User
      participant Quiz
      participant API

    User->>Quiz: Enter username and/or press Navigate to Quiz
      Quiz->>User: Route to Quiz
      User->>Quiz: Choose a category and difficulty
      Quiz->>User: User prompted with start quiz button.
      User->>Quiz: Press Start Quiz
      Quiz->>API: fetch request
      API->>Quiz: send response
      Quiz->>User: Send Question
      User->>Quiz: Answer Question

```
