import { Outlet } from 'react-router-dom'
import MyNav from './MyNav'
import Footer from './Footer'

function Layout() {
  return (
    <>
      <MyNav />
      <main>
        <Outlet />
        <Footer />
      </main>
    </>
  )
}

export default Layout