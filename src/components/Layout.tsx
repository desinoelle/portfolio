import { Outlet } from 'react-router-dom'
import MyNav from './MyNav'

function Layout() {
  return (
    <>
      <MyNav />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout