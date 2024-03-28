import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <aside className="block py-4 md:w-1/3 lg:w-1/4 ">
        <div className="sticky flex flex-col gap-2 p-4 text-sm border-r border-indigo-100 top-12">
           
            <Link to="/profile/mon-profile" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">Mon Profile</Link>
            <Link to="/profile/mes-posts" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">Mes Posts</Link>
            <Link to="/profile/notification" className="flex items-center px-3 py-2.5 font-bold bg-white  text-indigo-900 border rounded-full">Notifications</Link>
            <Link to="/profile/delete-account" className="flex text-red-500 items-center px-3 py-2.5 font-semibold hover:text-red-600 hover:border hover:rounded-full  ">Delete Account</Link>
        </div>
    </aside>
  )
}

export default SideBar