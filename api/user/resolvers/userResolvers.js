const arrayUsers = [
  {
    name: 'Andrew',
    active: true
  }, {
    name: 'Keivyla',
    active: false
  }
]

const userResolvers = {
  Query: {
    users: () => arrayUsers
  }
}

module.exports = userResolvers