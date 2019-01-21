import React, { Component } from "react";
import styled from "styled-components";
import { graphql, Query } from "react-apollo";
import {Link} from 'react-router-dom';
import AddEmployee from './addemployee';
import employees from "../graphql/employees";
import CircularDeterminate from "./loading";
import background2 from "../img/background2.jpg"
import Navprivate from "./privateNavbar/Navprivate";
import Create from '@material-ui/icons/Create';
import Modal from 'react-awesome-modal';
import logo from "../logo.svg";


// import SearchBar from 'materia
class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {open: false, selectedEmployee: null} 
  } 
  handleClose = () => {
    console.log('tyest');
    const { open } = this.state;
    this.setState({
      open: !open
    })
  }
  updateEmployee =  async (user)=>{ console.log('emp', user);
    await this.setState({ selectedEmployee: user}); 
    this.setState({ open : true})
  
  }
  removeEmployee = async (user) =>{
    await this.props.removeEmployee({
      variables:{
id: user.id,
userName: user.userName,
lastName: user.lastName,
prijet: user.projet,
position: user.position
      },
    })
  }

  render () {
  console.log("props",this.props);
  const allemployee = this.props.data.employees;
  const {open} = this.state;

    return (
      <Query query= {employees}>
      {({loading, error, data})=>{
      if (loading) return(<CircularDeterminate/> );
      if (error) return (<h4> Error ... </h4>);
      const {open} = this.state;
      
const employeeView = data.employees.map(user => (
  <tr>
    <td >  <Create className="update" onClick={()=> this.updateEmployee(user)}> Update</Create>
 </td>
    <td><Link style={{ textDecoration: 'none', color: 'black' }} to={`/gallery/${user.id}`}> <div className="info">{user.firstName}</div></Link></td>
    <td> <div className="info">{user.lastName}</div></td>
    <td><div className="info">{user.projet}</div></td>
    <td><button onClick="ok"/></td>
 </tr>
))

return (
<Wrapper>
  <Navprivate />
    <br></br>
    <h2> Liste des employés Oyez-T </h2>
      <table>
       <thead>
         <tr>
           
           <th> Update </th>
           <th>First Name</th>
           <th>Last Name</th>
           <th>Affectation</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
        {employeeView}
       </tbody>
      </table>
      <Modal visible={open} width="400" height="600" effect="fadeInUp" onClickAway={this.handleClose}>
       <img className="logo2" alt="logo2" width="100" height="100" src ={logo}>
       </img>
      <h3 className="employe">Modifier un employé Oyez-T </h3>
        <AddEmployee close={this.handleClose} employee={this.state.selectedEmployee}/>
 
       </Modal>
</Wrapper>
);}}
      </Query>
    );
  }
}
export default graphql(employees)(Profile);

const Wrapper = styled.div`
.update{
  display: inline-block;
}
  height: auto;
  width:100%;
  background-image :url(${background2});
  position: absolute;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
  

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: absolute;
      /* Top/left values mimic padding */
      top: 6px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: "First Name";
    }
    td:nth-of-type(2):before {
      content: "Last Name";
    }
    td:nth-of-type(3):before {
      content: "Job Title";
    }
    td:nth-of-type(4):before {
      content: "Favorite Color";
    }
    td:nth-of-type(5):before {
      content: "Wars of Trek?";
    }
    td:nth-of-type(6):before {
      content: "Secret Alias";
    }
    td:nth-of-type(7):before {
      content: "Date of Birth";
    }
    td:nth-of-type(8):before {
      content: "Dream Vacation City";
    }
    td:nth-of-type(9):before {
      content: "GPA";
    }
    td:nth-of-type(10):before {
      content: "Arbitrary Data";
    }
  }
  table {
    width: 1000px;
    margin: 0 auto;
    font-size: 18px;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    text-align: center;
    text-transform: capitalize;
    cursor : pointer;
  }
  /* Zebra striping */
  tr:nth-of-type(odd) {
    background: #eee;
  }
  th {
    background: #333;
    color: white;
    font-weight: 200;
    font-size: 18px;
    
  }
  td,
  th {
    padding: 0;
    border: 1px solid #ccc;
    text-align: center;
  }
  h2 {
    font-family: "Poppins",sans-serif;
    text-align: center;
  }
  .info {
    padding: 10px;
    text-align: center;
    &:nth-child(even) {
      background: #d8d8d8;
    }
  }
  table {
    tr {
      th {
        padding: 10px;
      }
    }
  }
`;
