import gql from 'graphql-tag';

export const ADD_EMPLOYEE = gql`
mutation addEmploye($EmployeeInput: EmployeeInput){
  addEmploye(input: $EmployeeInput){
  firstName
  lastName
  projet
  position
}
}
`;

export const UPDATE_EMPLOYEE = gql`
mutation addEmploye($EmployeeInput: EmployeeInput){
  updateEmploye(input: $EmployeeInput){
  firstName
  lastName
  projet
  position
}
}
`;

export const GET_EMPLOYEE = gql`
query getEmployee($empID: ID!){
employee(id: $empID){
  id
  firstName
  lastName
  projet
  position
}
}
`;