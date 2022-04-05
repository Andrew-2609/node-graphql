const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },

  Mutation: {
    addUser: (root, user, { dataSources }) => dataSources.usersAPI.addUser(user)
  }
}

module.exports = userResolvers