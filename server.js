const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const axios = require('axios');
const app = express();

// Notes
// ! => meaning is required.
// Query for read data
//  Mutation for write data

let message = "This is a message";
const schema = buildSchema(`
    type Post {
        userId: Int
        id: Int
        title: String
        body: String
    }

    type User {
        id: String
        name: String
        age: Int
        college: String
    }

    
    type Query {
        hello: String
        welcomeMessage(name: String, dayOfWeek: String!): String
        getUser: User
        getUsers: [User]
        getPostsFromExternalAPI: [Post]
        message: String
    }
    
    input UserInput {
        name: String!
        age: Int!
        college: String!
    }

    type Mutation {
        setMessage(newMessage: String): String
        createUser(user: UserInput): User
    }
    
    
`);

// createUser(name: String!, age: Int!, college: String!): User

const user = {
    id: "UUID-0001",
    name: "Moemen Gaballa",
    age: 26,
    college: "menofia, Egypt"
};

function getUser() {
    return user;
}

const root = {
    hello: () => {
        return 'Hello World!';
    },
    welcomeMessage: (args) => {
        return `Hey, ${args.name}, hows life, today is ${args.dayOfWeek}`;
    },
    getUser: () => {
        return getUser();
    },
    getUsers: () => {
        const users = [{
            id: "UUID-0001",
            name: "Moemen Gaballa",
            age: 26,
            college: "menofia, Egypt"
        }, {
            id: "UUID-0002",
            name: "Eslam",
            age: 30,
            college: "menofia, Egypt"
        }, {
            id: "UUID-0003",
            name: "Ahmed",
            age: 35,
            college: "menofia, Egypt"
        },];

        return users;
    },
    getPostsFromExternalAPI: async () => {
        const result = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

        return result.data;
    },
    setMessage: ({newMessage}) => {
        message = newMessage;
        return message;
    },
    message: () => {
        return message
    },
    createUser: (args) => {
        console.log(args);
        // create a new user inside DB on External API on even fireStore

        return args.user;
    }
};

app.use(
    '/graphql',
    graphqlHTTP({
        graphiql: true,
        schema: schema,
        rootValue: root,
    }),
)

app.listen(4000, () => {
    console.log(`app running on port 4000`);
})