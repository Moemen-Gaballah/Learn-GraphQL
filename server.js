const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const app = express();



// ! => meaning is required.
const schema = buildSchema(`
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
    }
`);

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
        console.log(args);
        return `Hey, ${args.name}, hows life, today is ${args.dayOfWeek}`;
    },
    getUser: () => {
        // return user;
        return getUser();
    },
    getUsers: () => {
        const users = [{
            id: "UUID-0001",
            name: "Moemen Gaballa",
            age: 26,
            college: "menofia, Egypt"
        },{
            id: "UUID-0002",
            name: "Eslam",
            age: 30,
            college: "menofia, Egypt"
        },{
            id: "UUID-0003",
            name: "Ahmed",
            age: 35,
            college: "menofia, Egypt"
        },];

        return users;
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