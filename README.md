# QuizStack

At QuizStack, coding enthusiasts can practise their coding skills and interview questions to land their dream jobs. QuizStack is a multi-page application built using React frontend with Rails backend.

## Project Features

- The different categories of quizzes are generated from database queries; the application makes API requests to the backend database to load and persist data.
- The score board keeps track of correct questions answered and demonstrates result with a progress bar indicator.
- For questions that needed more practice, they can be added to the user's personal playlist for later review;
- Once an user submits answer by clicking on the "Check Answer" button, the application will immediately evaluate user's response and notify the user if the question was answered correctly.
- There is a quick access to the result summary page if users decide to discontinue their practice and move on to a different playlist;
- In the user account page, user can to keep track of their personal playlists and make notes on their studies;
- On the result summary page, it calculates the total number of questions that were answered correctly and presents it with a pie chart. The "Questions", "Correct Answers" columns are populated based on users' selection of quizzes, and "Your Results" column put together a record of result status of each question users answered.

![QuizStackMainPage](https://user-images.githubusercontent.com/77166991/128938017-317d28b9-3c22-4660-8031-74285adc4dc9.gif)
![QuizStackDemo](https://user-images.githubusercontent.com/77166991/128937745-09f429d7-dacb-4ae1-8e77-358b4733b51e.gif)
![QuizStackUserAccount](https://user-images.githubusercontent.com/77166991/128936590-640bff2c-25ea-4d34-85ee-646f2dd5d4b1.gif)

## Setup

For this project, we need **TWO** terminals.

1. First, fork a copy of this project, then clone your new repo to your machine.
2. In one terminal, cd into react-front-end. Run `npm install`. Then, run `npm start` and go to `localhost:3000` in your browser;
3. In the other terminal, cd into rails-back-end. Run `bundle` to install the dependencies. Run `bin/rake db:setup` to create the databases (called rails_project_development by default). Run `bin/rails s -b 0.0.0.0` to run the server, on `localhost:8080`;
4. Select a quiz stack to start;
5. Don't forget to share our app with your friends, and most importantly, have fun~!

## Dependencies

- React
- Ruby on Rails
- PostgresSQL
- Axios
- Material-UI
- React Router
- React Dom
- React Draggable
- React Google Chart
