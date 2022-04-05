const { ApolloServer } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const userResolvers = require('./user/resolvers/userResolvers.js')
const UsersAPI = require('./user/datasource/user.js')

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI()
    }
  }
})

server.listen().then(({ url }) => {
  console.log(`Server running at ${url}`)
})