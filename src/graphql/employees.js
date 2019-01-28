import gql from 'graphql-tag';

export default gql`
query allemployee{
  employees{
  id
  firstName
  lastName
  projet
  position
  salary
  date
}
}
`;
