const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers.js')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`)
})