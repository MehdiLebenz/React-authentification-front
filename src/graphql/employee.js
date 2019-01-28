import gql from 'graphql-tag';



const GET_Employee_BY_ID = gql`

  query employee($id: ID!) {

    employee(id: $id) {

      firstName
      lastName
      projet
      position
      salary
      date

    }

  }

`;

export default GET_Employee_BY_ID;