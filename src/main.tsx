import { Router, Route, Routes } from '@solidjs/router'
import { render } from 'solid-js/web'
import { lazy } from 'solid-js'
const Home = lazy(() => import('./pages/home'))
const Users = lazy(() => import('./pages/users'))

render(() => (
  <Router base="/">
    <Routes>
      <Route path="users" component={Users} />
      <Route path="" component={Home} />
      <Route path="about" element={<div>This site was made with Solid</div>} />
    </Routes>
  </Router>  
), document.getElementById('root') as HTMLElement)
