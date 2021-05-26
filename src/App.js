import './App.css';

import { Grid } from 'semantic-ui-react'
import { LocationProvider, Router as ReachRouter } from '@reach/router'

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Speaker from './components/Speaker';
import Conduct from './components/ConductCode';
import PageNotFound from './components/404';

function App() {
  return (
    <LocationProvider>
      <div className="App">
          <NavBar />
          <Grid centered columns={3} className='pageBody' padded>
            <Grid.Column width={12}>
              <ReachRouter primary={false}>
                  <Home path='/' />
                  <Agenda path='/event-agenda' />
                  <Registration path='/register' />
                  <Speaker path='/speakers' />
                  <Conduct path="/code-of-conduct" />
                  <PageNotFound default />
              </ReachRouter>
            </Grid.Column>
          </Grid>
          <Footer />
        </div>
    </LocationProvider>
  );
}

export default App;
