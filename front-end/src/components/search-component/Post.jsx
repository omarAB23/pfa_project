import { Link } from "react-router-dom"

const Post = () => {
  return (
    <div className="mx-auto flex my-11 w-1/2 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
    <img className="h-48 w-1/3 object-cover object-center transform scale-95" src="assets/wayp1.png" alt="Product Image" />
        <div className="p-4 ">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">ret3i boulbeba</h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Bardo-Ariana , 8:00 AM , 4 personnes </p>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Description : Salut tout le monde ! Je propose un covoiturage.</p>
          <div className="flex mt-3 items-center">
            <p className="mr-2  text-base dark:text-gray-300 text-gray-700">Review :</p>
            <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
            <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
            <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
            <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
            <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          </div>
          
          <div className="flex items-center justify-between  ">
            <div className="flex  items-center ">
              <p className="mr-2 my-2 text-lg font-semibold text-gray-900 dark:text-white">prix :</p>
              <p className="text-base my-2 font-medium text-gray-500  dark:text-gray-300">15.00 dt</p>
            </div>
              <Link to='/more-info' className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Savoir plus</Link>
          </div>
        </div>
    </div>
  )
}

export default Post