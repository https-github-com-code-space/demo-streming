import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Shared/Navbar"
import Footer from "../Pages/Shared/Footer"
import TopNav from "../Pages/Shared/TopNav"


const Main = () => {
  return (
    <div>
        <TopNav/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main