const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
    bookCount: Int
    savedBooks: [Book]
  }
  type Book {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    link: String
    image: String
  }

  input bookInput {
    bookId: String!
    authors: [String]
    description: String!
    title: String!
    link: String
    image: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    deleteBook(bookId: String!): User
    saveBook(input: bookInput!): User
  }
`;

module.exports = typeDefs;
