import axios from 'axios'
import  { useRef, useState } from 'react'
import Modal from './profile-pic-components/Modal'

const UserProfile = () => {
    const [nameFromToken , setNameFromToken] = useState('')
    const [emailFromToken , setEmailFromToken] = useState('')


    const avatarUrl = useRef(
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.newyorker.com%2Fnews%2Fdaily-comment%2Fmonkey-see-monkey-click&psig=AOvVaw3q9K3jAduJNgKLh-K4Qv7w&ust=1711666404611000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIje6bHElYUDFQAAAAAdAAAAABAE"
      );
      const [modalOpen, setModalOpen] = useState(false);

      const updateAvatar = (imgSrc) => {
        avatarUrl.current = imgSrc;
      };

    axios.get('http://localhost:3001/auth/gettoken')
    .then(respose=>setNameFromToken(respose.data.token.name))
    .catch(error=>console.log(error))

    axios.post('http://localhost:3001/auth/getuser',{nameFromToken})
    .then(response=>setEmailFromToken(response.data.currentUser.email))
    .catch(error=>console.log(error))

  return (
    
    <main className="w-full min-h-screen py-1 md:w-2/3 lg:w-3/4">
        <div className="p-2 md:p-4">
            <div className="w-full px-6 pb-8 mt-8 sm:max-w-xl sm:rounded-lg">
                <h2 className="pl-6 text-2xl font-bold sm:text-xl">Public Profile</h2>

                <div className="grid max-w-2xl mx-auto mt-8">
                    <div className="flex flex-col items-center space-y-5 sm:flex-row sm:space-y-0">
                        <img className="object-cover w-40 h-40 p-1 rounded-full ring-2 ring-indigo-300 dark:ring-indigo-500"
                            src={avatarUrl.current}
                            alt="Bordered avatar" />

                        <div className="flex flex-col space-y-5 sm:ml-8">
                            <button type="button"
                                onClick={()=>{setModalOpen(true)}}
                                className="py-3.5 px-7 text-base font-medium text-indigo-100 focus:outline-none bg-[#202142] rounded-lg border border-indigo-200 hover:bg-indigo-900 focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Change picture
                                
                            </button>
                            <button type="button"
                                className="py-3.5 px-7 text-base font-medium text-indigo-900 focus:outline-none bg-white rounded-lg border border-indigo-200 hover:bg-indigo-100 hover:text-[#202142] focus:z-10 focus:ring-4 focus:ring-indigo-200 ">
                                Delete picture
                            </button>
                        </div>
                       {modalOpen && (
                            <Modal
                            updateAvatar={updateAvatar}
                            closeModal={() => setModalOpen(false)}
                            />
                        )}
                    </div>

                    <div className="items-center mt-8 sm:mt-14 text-[#202142]">
                        <div className="flex flex-col items-center w-full mb-2 space-x-0 space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0 sm:mb-6">
                            <div className="w-full">
                                <label htmlFor="first_name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    first name</label>
                                <input type="text" id="first_name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your first name" value={nameFromToken} required />
                            </div>

                            <div className="w-full">
                                <label htmlFor="last_name"
                                    className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                    last name</label>
                                <input type="text" id="last_name"
                                    className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                    placeholder="Your last name" value="Ferguson" required />
                            </div>
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label htmlFor="email"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Your
                                email</label>
                            <input type="email" id="email"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder={emailFromToken}  required />
                        </div>

                        <div className="mb-2 sm:mb-6">
                            <label htmlFor="profession"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Profession</label>
                            <input type="text" id="profession"
                                className="bg-indigo-50 border border-indigo-300 text-indigo-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 "
                                placeholder="your profession" required />
                        </div>

                        <div className="mb-6">
                            <label htmlFor="bio"
                                className="block mb-2 text-sm font-medium text-indigo-900 dark:text-white">Bio</label>
                            <textarea id="bio" rows="4"
                                className="block p-2.5 w-full text-sm text-indigo-900 bg-indigo-50 rounded-lg border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 "
                                placeholder="Write your bio here..."></textarea>
                        </div>

                        <div className="flex justify-end">
                            <button type="submit"
                                className="text-white bg-indigo-700  hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Save</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>

  )
}

export default UserProfile