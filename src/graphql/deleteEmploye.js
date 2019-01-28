import gql from 'graphql-tag';
const DELETE_EMPLOYEE = gql `
mutation removeEmploye($id : ID!){
  removeEmploye(id : $id)
}


`;
export default DELETE_EMPLOYEE;