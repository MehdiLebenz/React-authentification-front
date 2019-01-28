import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import oyez from './components/oyez';
import EmployeeDetail from './components/employeeDetail';
import PrivateRoute from '../src/components/privateRoute';
import AddUser from './components/addUser';
import Landing from './components/landing';

const connectedQuery = gql`
query connectQuery{
isConnected @client
}
`;

function Routers() {
return (
    <Query query={connectedQuery} >
{
    ({loading,error,data}) => {
        if(loading) return (<h4>loading...</h4>);
        if(error) return (`${error}`);
        const {isConnected} = data;
        return(
            <Router>
 <div>
    <Route exact path="/" component={Landing} />
    <Route exact path="/Login" component={Login}/>
    <PrivateRoute exact path="/Home" component={Home} isConnected={isConnected}/>
    <PrivateRoute exact path="/MyProfile" component={Profile}isConnected={isConnected}/>
    <PrivateRoute exact path="/Oyez" component={oyez}isConnected={isConnected}/>
    <Route exact path="/gallery/:id" render={({match})=> <EmployeeDetail match={match} /> }/>
    <Route path="/register" component={AddUser}/>
    </div>
</Router>
        )
    }
}
</Query>
);
}
export default Routers;
