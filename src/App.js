import './App.css';

import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { LocationProvider, Router as ReachRouter } from '@reach/router'

import { Grid } from 'semantic-ui-react'

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Agenda from './components/Agenda';
import Registration from './components/Registration';
import Speaker from './components/Speaker';
import Participate from './components/Participate';
import Conduct from './components/ConductCode';
import PageNotFound from './components/404';


function App() {
  const history = createBrowserHistory()

  history.listen(location => {
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID)

    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname)
  })

  return (
    <LocationProvider>
      <div className="App">
          <NavBar />
          <Grid centered columns={3} className='pageBody' padded>
            <Grid.Column width={14}>
              <ReachRouter primary={false} history={history}>
                  <Home path='/' />
                  <Agenda path='/event-agenda' />
                  <Registration path='/register' />
                  <Speaker path='/speakers' />
                  <Participate path='/get-involved' />
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
