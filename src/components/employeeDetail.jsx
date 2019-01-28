import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GET_Employee_BY_ID from '../graphql/employee';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from './navbar';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const EmployeeDetail = ({ match }) => (

  <div className="app">

    <header>
      <Navbar/>


    </header>

    <Query

      query={GET_Employee_BY_ID}

      variables={{

        id: match.params.id,

      }}

    >

      {({ data, loading }) => {

        if (loading) {

          return 'Loading...';

        }

        const { employee } = data;
console.log(employee)
        return (

<Wrapper>
          <h2 className="section-title"> Informations relatives à : {employee.firstName} {employee.lastName}</h2>

          <div>
            
<Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell>Nom</CustomTableCell>
            <CustomTableCell align="right">Prénom</CustomTableCell>
            <CustomTableCell align="right">Position</CustomTableCell>
            <CustomTableCell align="right">Affectation</CustomTableCell>
            <CustomTableCell align="right">Salaire</CustomTableCell>
            <CustomTableCell align="right">Date d'entrée</CustomTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
 
              <TableRow className={employee.firstName} >
                <CustomTableCell component="th" scope="row">
                  {employee.firstName}
                </CustomTableCell>
                <CustomTableCell align="right">{employee.lastName}</CustomTableCell>
                <CustomTableCell align="right">{employee.position}</CustomTableCell>
                <CustomTableCell align="right">{employee.projet}</CustomTableCell>
                <CustomTableCell align="right">{employee.salary} DT</CustomTableCell>
                <CustomTableCell align="right">{employee.date} </CustomTableCell>


              </TableRow>
    
        </TableBody>
      </Table>
    </Paper>


          </div>
          </Wrapper>

        );

      }}

    </Query>

  </div>
);

EmployeeDetail.propTypes = {

  match: PropTypes.object.isRequired,

};

export default EmployeeDetail;
const Wrapper = styled.div`
h2{
  text-align: center;
    font-size: -webkit-xxx-large;
    display: block;
    padding: 30px;}
`;