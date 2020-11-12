module.exports = {
  definition: `
    type UserClasses {
      id: ID!
      username: String!
      email: String!
      confirmed: Boolean
      blocked: Boolean
      role: UsersPermissionsMeRole
      subTier: String
      classes: [Classes]
    }
  `,
  query: `
    userClasses: UserClasses 
  `,
  resolver: {
    Query: {
      userClasses: {
        resolver: 'plugins::users-permissions.user.me'
      }
    }
  }
}