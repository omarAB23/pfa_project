import Footer from "@/components/shared/Footer"
import NavBar from "@/components/shared/NavBar"
import { Outlet } from "react-router-dom"


const RootLayout = () => {
  return (
    <div className="w-full">
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout