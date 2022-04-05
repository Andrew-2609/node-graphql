const userResolvers = {
  Query: {
    users: (root, args, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },

  Mutation: {
    addUser: (root, user, { dataSources }) => dataSources.usersAPI.addUser(user),
    updateUser: (root, user, { dataSources }) => dataSources.usersAPI.updateUser(user),
    deleteUser: (root, { id }, { dataSources }) => dataSources.usersAPI.deleteUser(id)
  }
}

module.exports = userResolvers