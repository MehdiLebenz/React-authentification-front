import gql from 'graphql-tag';

export default gql `
query me{
  me{
  email
  userName
  position
  experience
}
}
`;