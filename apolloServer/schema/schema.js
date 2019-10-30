import { gql } from 'apollo-server';


const typeDefs = gql`
    type Episode {
        id: ID!,
        title: String!
        text: String!,
        img: String!
    }
    
    type Query {
        allEpisodes: [Episode!]!
    }
`;

export default typeDefs;
