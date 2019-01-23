import React from 'react';
import { Query } from 'react-apollo';
import PropTypes from 'prop-types';
import GET_Employee_BY_ID from '../graphql/employee';
import Table from '@material-ui/core/Table';
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

      <h2 className="section-title">Employee Details</h2>

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



          <div>
<Paper >
      <Table >
        <TableHead>
          <TableRow>
            <CustomTableCell>Nom</CustomTableCell>
            <CustomTableCell align="right">Prénom</CustomTableCell>
            <CustomTableCell align="right">Position</CustomTableCell>
            <CustomTableCell align="right">Affectation</CustomTableCell>
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
              </TableRow>
    
        </TableBody>
      </Table>
    </Paper>
           


          </div>

        );

      }}

    </Query>

  </div>

);

EmployeeDetail.propTypes = {

  match: PropTypes.object.isRequired,

};

export default EmployeeDetail;