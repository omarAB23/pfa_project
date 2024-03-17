import { Link } from "react-router-dom"

const MoreInfo = () => {
  return (
    <div className="mx-auto flex my-11 w-2/3 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300  hover:shadow-lg">
        <div className="p-4 ">
          <h2 className="mt-2 text-lg font-medium dark:text-white text-gray-900">ret3i boulbeba</h2>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">🚗 Covoiturage de Bardo à Ariana - Places disponibles pour 4 personnes</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📍 Départ: Bardo, Tunis</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📍 Destination: Ariana, Tunis</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">📅 Date et heure de départ: 3/17/2024 8:00 AM</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">✅ Places disponibles: 4</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">💬 Description :</p>
          <p className="my-3 text-base dark:text-gray-300 text-gray-700">Salut tout le monde ! Je propose un covoiturage confortable de Bardo à Ariana. 
          Nous sommes un groupe de 4 personnes et avons encore de la place pour vous rejoindre. La voiture est spacieuse et confortable, avec de la musique à bord pour 
          rendre le voyage agréable. Nous prévoyons de partir à l&apos;heure indiquée et d&apos;arriver à destination en toute sécurité. N&apos;hésitez pas à nous rejoindre pour 
          partager les frais et réduire notre empreinte carbone. Contactez-moi pour réserver votre place ou pour plus d&apos;informations !</p>
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
              <Link to='/more-info' className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full">Reserver</Link>
          </div>
        </div>
    </div>
  )
}

export default MoreInfo