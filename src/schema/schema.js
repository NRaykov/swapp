import { qql } from 'apollo-server';


const typeDefs = qql`
    type Character {
        id: ID!,
        name: String!
        height: Int!,
        weight: Int!,
        species: String!,
        home: String!,
        starShips: String!
    }
    
    type Query {
        allCharacters: [Character!]!
    }
`;

export default typeDefs;
