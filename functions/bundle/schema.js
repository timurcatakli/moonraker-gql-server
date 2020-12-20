const { gql } = require("apollo-server-lambda");

const typeDefs = gql`
  type Category {
    id: String!
    name: String!
    link: String!
    slug: String
  }

  type Price {
    currency: String!
    raw: String!
    symbol: String
    value: Float
  }

  type Product {
    asin: String
    current_category: Category
    image: String
    link: String
    parent_category: Category
    position: Int
    price_lower: Price
    price_upper: Price
    price: Price
    rank: Int
    rating: Float
    ratings_total: Int
    title: String
  }

  type CategoryBestseller {
    bestsellers: [Product]!
    current_category: Category
    parent_category: Category
    child_categories: [Category]
  }

  type Query {
    categoryBestsellers(
      url: String
      sortBy: String = "rank"
      sortOrder: String = "asc"
    ): CategoryBestseller!
  }
`;

module.exports = typeDefs;
