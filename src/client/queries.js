import gql from 'graphql-tag';

 const authQuery = gql`
  query IsAuthenticated {
    authenticated @client
  }
`;

const logInQuery = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password){
        token
    }
  }
`;



//******* Characters Queries
const characterQuery = gql`
  query CharacterQuery($characterId: ID!) {
    person(id: $characterId){
        name
        height
        mass
        image
        species{
            name
        }
        homeworld{
            name
        }
        starships{
            edges{
                node{
                    id
                    image
                    name
                }
            }
        }
      }
            
    }
`;


const charactersQuery = gql`
  query CharactersQuery($first: Int!, $after: String) {
    allPeople(first: $first, after: $after){
      edges{
        node{
          id
          image
          name
        }
      }
      pageInfo{
        hasNextPage
        endCursor
      }
    }
      
    }
`;


//******* Episodes Queries
 const episodeQuery = gql`
  query EpisodeQuery($episodeId: ID!, $first: Int, $after: String) {
    episode(id: $episodeId) {
        id
        title
        image
        director
        releaseDate
        openingCrawl
        people(first: $first, after: $after) {
          totalCount
          pageInfo{
            hasNextPage
            endCursor
          }
          edges{
            cursor
            node{   
              id
              name
              image
            }
          }
        }
      }
    }
`;

const episodesQuery = gql`
      {
       allEpisodes (first:8) {
          totalCount
          edges{
            node{
              episodeId
              title
              image
              openingCrawl
            }
          }
        }
      }
    `;


//******* Starship Queries
const starshipQuery = gql`
  query starshipQuery($starshipId: ID!) {
    starship(id: $starshipId) {
        id
        name
        image
        cost
        starshipClass
        crew
        maxAtmosphericSpeed
        hyperdriveRating
      }
    }
`;

export {authQuery, logInQuery, characterQuery, charactersQuery, episodeQuery, episodesQuery,  starshipQuery};
