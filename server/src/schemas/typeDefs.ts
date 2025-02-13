const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }


  input UserInput {
    username: String!
    email: String!
    password: String!
  }


  input UpdateUserInput {
    originUsername: String!
    username: String!
    email: String!
    password: String!
  }
  
  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    me: User
  }

  type Mutation {
    addUser(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    deleteUser(username: String!): User
    updateUser(input : UpdateUserInput!) : User    
  }
`;

export default typeDefs;
