import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Events from './components/events/Events';


import { Provider } from './context';


import './App.css';

const Page404 = ({ location }) => (
  <div>
    <h2>No match found for <code>{location.pathname}</code><br/><br/>
    <Link to={`/`} className="btn btn-dark btn-sm mb-4">
             Go Back
            </Link>
    </h2>
  </div>
);


function App() {
  return (
  	<Provider>
  		<Router>
    		<React.Fragment>
		     	<Navbar/>
		 		<div className="container">
		 			<Switch>
		 				<Route path="/" exact component={Index} />
		 				<Route path="/artists/:artist/:id/events" exact component={Events} />
             <Route component={Page404} />
		 			</Switch>

		 		</div>
  			</React.Fragment>
    	</Router>
    </Provider>
  );
}

export default App;
