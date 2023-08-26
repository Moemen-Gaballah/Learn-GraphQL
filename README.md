# Learn-GraphQL
Learn GraphQL

## [GraphQL tutorial](https://www.youtube.com/playlist?list=PLdHg5T0SNpN1LfR4XZ8GY5nIeklHjFtSq)

### run project
* `npm install`
* `npm run dev`
* go to url `http://localhost:4000/graphql` to run your query.
* you can use this data `
  query {
  hello
  welcomeMessage(name: "moemen", dayOfWeek: "Sunday"),
  getUser {
  id,
  name,
  age,
  college
  },
  getUsers {
  name,
  college
  },
  }` and put here `http://localhost:4000/graphql` and run query.