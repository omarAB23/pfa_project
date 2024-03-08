import {Outlet,Navigate} from  "react-router-dom"




const AuthLayout = () => {
  const isAuthenticated = false

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/"/>
      ) : (
        <>
          <section className=" flex-1 justify-center items-center flex-col py-10">
          <Outlet/>
          </section>

          <img
            src="assets\3-4-1024x543 1.png"
            alt="logo"
            className="right-0 hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
         

        </>
      )}
    </>

  )
}

export default AuthLayout