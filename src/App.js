import {BrowserRouter, Route, Switch} from 'react-router-dom'
import SpotifyClone from './components/SpotifyClone'
import LoginForm from './components/LoginForm'
import ProtectedRoute from './components/ProtectedRoute'
import SpecificPlaylist from './components/SpecificPlaylist'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <ProtectedRoute exact path="/" component={SpotifyClone} />
      <ProtectedRoute
        exact
        path="/specificPlaylist/:id"
        component={SpecificPlaylist}
      />
    </Switch>
  </BrowserRouter>
)

export default App
