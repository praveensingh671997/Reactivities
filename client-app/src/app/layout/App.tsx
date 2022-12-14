import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from './Navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { observer } from 'mobx-react-lite';
import { Route, useLocation } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path='/' component={HomePage}></Route>
      <Route path={'/(.+)'}
        render={() => (
          <>
            <Navbar />
            <Container style={{ marginTop: '7em' }}>

              <Route exact path='/activities' component={ActivityDashboard}></Route>
              <Route path='/activities/:id' component={ActivityDetails}></Route>
              {
                // same component called on different routes i.e. /createActivity and /manage/:id
                // so we provide key here to tell react that it is different component 
              }
              <Route key={location.key} path={['/createActivity', '/manage/:id']} component={ActivityForm}></Route>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
