import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { ToastContainer, toast, Bounce } from "react-toastify";
=======
import { Bounce, toast } from "react-toastify";
>>>>>>> 693053c (adding searchfilter and historique)
import "react-toastify/dist/ReactToastify.css";

const PublishRoute = () => {
  const [depart, setDepart] = useState("");
  const [arrivee, setArrivee] = useState("");
  const [place, setPlace] = useState("");
  const [contact, setContact] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [condition, setCondition] = useState("");
  const [desc, setDesc] = useState("");
<<<<<<< HEAD

  console.log(date);

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/post/add", {
        depart,
        arrivee,
        place,
        contact,
        price,
        date,
        condition,
        desc,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
          toast.success("Post publiée", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }); // Use toast.success for success message
        } else {
          toast.error("Erreur lors de la publication de la post", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          }); // Use toast.error for error message
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Erreur lors de la publication de la post", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        }); // Use toast.error for error message
      });
  }

  return (
    <div className="bg-white  border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Publier trajet</h3>
      </div>

      <div className="p-6 space-y-6">
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📍 Départ
              </label>
              <input
                onChange={(e) => {
                  setDepart(e.target.value);
                }}
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="donner votre place de depart"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📍 Arrivee
              </label>
              <input
                onChange={(e) => {
                  setArrivee(e.target.value);
                }}
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="donner votre place de depart"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="brand"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                ✅ Places disponibles
              </label>
              <input
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
                type="text"
                name="brand"
                id="brand"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="entrer le nombre de place"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Prix
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                name="price"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="15dt"
                required
              />
            </div>
=======
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");

  axios
    .get("http://localhost:3001/auth/gettoken")
    .then((respose) => setNameFromToken(respose.data.token.name))
    .catch((error) => console.log(error));

  axios
    .post("http://localhost:3001/auth/getuser", { nameFromToken })
    .then((response) => setIdFromToken(response.data.currentUser._id))
    .catch((error) => console.log(error));

  const navigate = useNavigate();

  async function submit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:3001/post/add", {
        depart,
        arrivee,
        place,
        contact,
        price,
        date,
        condition,
        desc,
        idFromToken,
        nameFromToken,
      })
      .then((response) => {
        if (response.data.status) {
          navigate("/");
          toast.success(" post publuée", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
        }
      })
      .catch((error) => console.log(error));
  }

  return (
    <div className="bg-white  border-4 rounded-lg shadow relative m-10">
      <div className="flex items-start justify-between p-5 border-b rounded-t">
        <h3 className="text-xl font-semibold">Publier trajet</h3>
      </div>

      <div className="p-6 space-y-6">
        <form action="#">
          <div className="grid grid-cols-6 gap-6">
>>>>>>> 693053c (adding searchfilter and historique)
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
<<<<<<< HEAD
                📞 Contact
              </label>
              <input
                onChange={(e) => {
                  setContact(e.target.value);
=======
                📍 Départ
              </label>
              <input
                onChange={(e) => {
                  setDepart(e.target.value);
>>>>>>> 693053c (adding searchfilter and historique)
                }}
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
<<<<<<< HEAD
                placeholder="votre numero portable"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📅 Date et heure de départ
              </label>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="datetime-local"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
=======
>>>>>>> 693053c (adding searchfilter and historique)
                placeholder="donner votre place de depart"
                required
              />
            </div>
<<<<<<< HEAD
            <div className="col-span-full">
              <label
                htmlFor="conditions"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                🚦 Conditions
              </label>
              <textarea
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                rows="2"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="votre trajet"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

=======
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📍 Arrivee
              </label>
              <input
                onChange={(e) => {
                  setArrivee(e.target.value);
                }}
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="donner votre place de depart"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="brand"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                ✅ Places disponibles
              </label>
              <input
                onChange={(e) => {
                  setPlace(e.target.value);
                }}
                type="text"
                name="brand"
                id="brand"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="entrer le nombre de place"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="price"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Prix
              </label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                type="number"
                name="price"
                id="price"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="15dt"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📞 Contact
              </label>
              <input
                onChange={(e) => {
                  setContact(e.target.value);
                }}
                type="text"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="votre numero portable"
                required
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="product-name"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                📅 Date et heure de départ
              </label>
              <input
                onChange={(e) => {
                  setDate(e.target.value);
                }}
                type="datetime-local"
                name="product-name"
                id="product-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5"
                placeholder="donner votre place de depart"
                required
              />
            </div>
            <div className="col-span-full">
              <label
                htmlFor="conditions"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                🚦 Conditions
              </label>
              <textarea
                onChange={(e) => {
                  setCondition(e.target.value);
                }}
                rows="2"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="votre trajet"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="product-details"
                className="text-sm font-medium text-gray-900 block mb-2"
              >
                Description
              </label>
              <textarea
                onChange={(e) => {
                  setDesc(e.target.value);
                }}
                rows="6"
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4"
                placeholder="Details"
              ></textarea>
            </div>
          </div>
        </form>
      </div>

>>>>>>> 693053c (adding searchfilter and historique)
      <div className="p-6 border-t border-gray-200 rounded-b">
        <button
          onClick={submit}
          className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          type="submit"
        >
          publier
        </button>
      </div>
    </div>
  );
};

export default PublishRoute;
