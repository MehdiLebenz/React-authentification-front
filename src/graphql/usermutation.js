import gql from 'graphql-tag';

export const ADD_USER = gql`
mutation register($UserInput: UserInput){
  register(input: $UserInput){
  email
  password
  userName
  position
  experience
}
}
`;
export const USER_UPDATE = gql`
mutation register($UserInput: UserInput){
  register(input: $UserInput){
    email
    password
    userName
    position
    experience
}
}
`;
export const USER_INFO = gql`
query allUsers($UserInput: UserInput){
  allUsers(input: $UserInput){
    email
    password
    userName
    position
    experience
}
}
`;