import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {ADD_EMPLOYEE, UPDATE_EMPLOYEE } from './../graphql/employeesMutations';
import employees from "../graphql/employees";
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

class AddEmployee extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      firstName : '',
      lastName : '',
      projet : '',
      position: '',
    }
  }

  componentWillReceiveProps(props){
    if (props.employee){
        const { employee } = props;
     this.setState({...employee});
    }
  }
  handleChange = (event) =>{
  const { target: {  name, value} } = event;
  this.setState({[name]: value});
  }

  add = async (ajout) =>{
      try {
        const result = await ajout();
        console.log('result', result);
        window.alert('ok');
        this.props.close();
      } catch (error) {
        window.alert('error');
      }
    }
  render() { 
  const { id, firstName, lastName, projet, position } = this.state;
  const variables = id ? { id, firstName, lastName, projet, position } : { firstName, lastName, projet, position };
  const action = id ? UPDATE_EMPLOYEE : ADD_EMPLOYEE ;
  return (
          <Wrapper>
              <Mutation mutation={action} variables={{EmployeeInput : {...variables}}} refetchQueries={[{ query: employees}]}>
                  {(addEmploye)=>(
                      <div>
                          <TextField
                              label="FirstName"
                              value={firstName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="firstName"
                          />
                          <TextField
                              label="LastName"
                              value={lastName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="lastName"
                          />
                          <TextField
                              label="Affectation"
                              value={projet}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="projet"
                          />
                          <TextField
                              label="Poste"
                              value={position}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="position"
                          />
                          <Fab  className="button" aria-label="Add" onClick={()=>{this.add(addEmploye)}}>
                              <AddIcon />
                          </Fab>
                    </div>
              )}
                </Mutation>
            </Wrapper>
          )
          }
        }
        
export default AddEmployee;

const Wrapper = styled.div`
button{
  top: 100px;
    left: 170px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}

`