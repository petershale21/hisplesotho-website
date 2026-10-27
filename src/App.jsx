import { Routes, Route } from 'react-router-dom'

import Layout from './components/layout/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Impact from './pages/Impact'
import Resources from './pages/Resources'
import Support from './pages/Support'
import Contact from './pages/Contact'

/*
 * Central route table.
 * --------------------
 * The parent <Route element={<Layout />}> is a *layout route*:
 * it renders once, and each child page renders into its <Outlet />.
 * Adding a new page means adding one child <Route> — the shell
 * (Header/Footer) is never duplicated.
 */
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}