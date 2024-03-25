import { Route , Routes } from "react-router-dom"
import SignUpForm from "./_auth/forms/SignUpForm"
import SignInForm from "./_auth/forms/SignInForm"
import AuthLayout from "./_auth/AuthLayout"
import RootLayout from "./_root/RootLayout"
import Home from "./_root/pages/Home"
import"./global.css"
import SearchResults from "./_root/pages/SearchResults"
import MoreInfo from "./_root/pages/MoreInfo"
import PublishRoute from "./_root/pages/PublichRoute"
import Profile from "./_root/pages/Profile"
import {  ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path="/sign-in" element={<SignInForm/>}/>

          <Route path="/sign-up" element={<SignUpForm/>}/>
        </Route>

        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/search-result" element={<SearchResults/>}/>
          <Route path="/more-info" element={<MoreInfo/>}/>
          <Route path="/publish-route" element={<PublishRoute/>}/>
          <Route path="/profile" element={<Profile/>}/>

        </Route>
      </Routes>
      <ToastContainer/>
      

    </main>
  )
}

export default App