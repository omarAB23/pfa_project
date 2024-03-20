import { Link } from "react-router-dom"

const MoreInfo = () => {
  const  clickedPost = JSON.parse(sessionStorage.getItem("clickedPost"));
  console.log(clickedPost)

  return (
    <div className="mx-auto flex my-11  w-2/3 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300  hover:shadow-lg">
        <div className="p-4 ">
          <h2 className="mt-2 text-lg font-medium dark:text-white text-gray-900">ret3i boulbeba</h2>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">🚗 Covoiturage de {clickedPost.depart} à {clickedPost.arrivee} - Places disponibles pour {clickedPost.place} personnes</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📍 Départ: {clickedPost.depart}, Tunis</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📍 Destination: {clickedPost.arrivee}, Tunis</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📅 Date et heure de départ: {clickedPost.date.substring(0,9)} , {clickedPost.date.substring(11, 16)} </p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">✅ Places disponibles: {clickedPost.place}</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">💬 Description :</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">{clickedPost.desc}</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📞 Contact: +216 12 234 567</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">🚦 Conditions: Veuillez prévoir d&apos;arriver à l&apos;heure convenue pour le départ. Le partage des frais se fera équitablement entre les passagers.</p>
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
              <Link  to='/more-info' className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Reserver</Link>
          </div>
        </div>
    </div>
  )
}

export default MoreInfo