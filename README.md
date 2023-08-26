# Learn-GraphQL
Learn GraphQL

## [GraphQL tutorial](https://www.youtube.com/playlist?list=PLdHg5T0SNpN1LfR4XZ8GY5nIeklHjFtSq)

### run project
* `npm install`
* `npm run dev`
* Go to url `http://localhost:4000/graphql` to run your query.
* You can use this data `
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
  getPostsFromExternalAPI {
  id
  title
  }
  }` and put here `http://localhost:4000/graphql` and run query.

## Example From Postman request
![Example](https://raw.githubusercontent.com/Moemen-Gaballah/Learn-GraphQL/main/example%20from%20postman.png)

## Example query for reading data from GraphQl instead of many endpoints
![Example](https://raw.githubusercontent.com/Moemen-Gaballah/Learn-GraphQL/main/example%20query%20read%20data%20from%20GraphQl%20instead%20of%20many%20endpoint.png)
