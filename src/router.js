import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Query} from 'react-apollo';
import gql from 'graphql-tag';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import oyez from './components/oyez';
import Gallery from './components/gallery';
import PrivateRoute from './components/privateRoute';

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
    {/* <MenuLink activeOnlyWhenExact={true} to="/" label="Liste des employés"/>
    <MenuLink to="/About" label="About"/> */}
    <Route exact path="/" component={Login}/>
    <PrivateRoute exact path="/Home" component={Home} isConnected={isConnected}/>
    <PrivateRoute exact path="/MyProfile" component={Profile}isConnected={isConnected}/>
    <PrivateRoute exact path="/Oyez" component={oyez}isConnected={isConnected}/>
    <Route exact path="/gallery/:id" render={({match})=> <Gallery match={match} /> }/>
    
    </div>
</Router>
        )
    }
}
</Query>
);
}
export default Routers;
