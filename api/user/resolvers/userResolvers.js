const { GraphQLScalarType } = require('graphql')

const userResolvers = {
  // for study purposes; in this case, it isn't really necessary, since key and value are equal strings
  RolesType: {
    STUDENT: 'STUDENT',
    INSTRUCTOR: 'INSTRUCTOR',
    COORDINATION: 'COORDINATION'
  },

  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string with date and time in ISO-8601 format',
    serialize: (value) => new Date(value).toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),

  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },

  Mutation: {
    addUser: (root, { user }, { dataSources }) => dataSources.usersAPI.addUser(user),
    updateUser: (root, userData, { dataSources }) => dataSources.usersAPI.updateUser(userData),
    deleteUser: (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
  }
}

module.exports = userResolvers