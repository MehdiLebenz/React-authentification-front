import React from 'react';

import { Query } from 'react-apollo';

import PropTypes from 'prop-types';


import GET_Employee_BY_ID from '../graphql/employee';



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

            <p>{employee.firstName} </p>


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