const express = require('express');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');

const app = express();

const schema = buildSchema(`
    type Query {
        hello: String
        welcomeMessage(name: String): String
    }
`);

const root = {
    hello: () => {
        return 'Hello World!';
    },
    welcomeMessage: (args) => {
        console.log(args);
        return `Hey, ${args.name}`;
    },
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