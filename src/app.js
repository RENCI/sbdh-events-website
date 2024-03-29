import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Menu } from './components/menu'
import {
  HomeView,
  NotFoundView,
  RegistrationView,
  AgendaView,
  SpeakersView
} from './views'

import { Header } from './components/header'
import { Footer } from './components/footer'

const menuOptions = [
  {
    path: '/',
    label: 'Home',
    view: <HomeView />,
  },
  {
    path: '/registration',
    label: 'Registration',
    view: <RegistrationView />,
  },
  {
    path: '/agenda',
    label: 'Agenda',
    view: <AgendaView />,
  },
  {
    path: '/speakers',
    label: 'Speakers',
    view: <SpeakersView />,
  },
]

//

export const App = () => {
  return (
    <Fragment>
      <Header menuLinks={ menuOptions } />
      <Menu options={ menuOptions } />
      <main>
        <Routes>
          {
            // we'll build the routes from the main menu items.
            // note this implementation only supports a flat,
            // one-level navigation structure.
            menuOptions.map(({ path, view, label }) => (
              <Route
                key={ `route-${ label }` }
                path={ path }
                element={ view }
              />
            ))
          }
          <Route path="*" element={ <NotFoundView /> } />
        </Routes>
      </main>

      <Footer />
    </Fragment>
  )
}
