import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

/*
 * App shell.
 * ---------
 * Wraps every route with persistent chrome (Header above, Footer
 * below). The routed page renders into <Outlet />.
 * Footer now real — adds contact info and secondary nav.
 */
export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}