import { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";
import axios from "axios";
import paiment from "./paiment";
import { useNavigate } from "react-router-dom";

const MoreInfo = () => {
  const clickedPost = JSON.parse(sessionStorage.getItem("clickedPost"));
  console.log(clickedPost);

  const navigate = useNavigate();

  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [modalSize, setModalSize] = useState("xl");
  const [nombre_places, setNombre_places] = useState(1);
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [erreur, setErreur] = useState(false);
  const [availableSeats, setAvailableSeats] = useState(clickedPost.place);
  const [mode_paiement, setMode_paiement] = useState("PayPal");
  const [isReserved, setIsReserved] = useState(false);
  const [statut_reservation, setStatutReservation] = useState("en attente");

  const [prix_total, setPrixTotal] = useState(
    Number.isNaN(clickedPost.price) ? 0 : clickedPost.price / 4
  );
  const id_trajet = clickedPost._id;
  const id_passager = idFromToken;
  const id_conducteur = clickedPost.idconducteur;
  console.log(id_conducteur);
  const date_reservation = new Date().toISOString();

  useEffect(() => {
    // Fetch token
    axios
      .get("http://localhost:3001/auth/gettoken")
      .then((response) => {
        console.log(response);
        setNameFromToken(response.data.token.name);
        return response.data.token.name;
      })
      .then((nameFromToken) => {
        // Fetch user data using token
        return axios.post("http://localhost:3001/auth/getuser", {
          nameFromToken: nameFromToken,
        });
      })
      .then((response) => {
        console.log(response);
        const currentUser = response.data.currentUser;
        setIdFromToken(currentUser._id);
      });
  }, []);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value);
    if (isNaN(value) || value > clickedPost.place) {
      setErreur(true);
    } else {
      setErreur(false);
      setNombre_places(value);
      const newPrixTotal = value * (clickedPost.price / 4);
      setPrixTotal(newPrixTotal);
    }
  };
  console.log(mode_paiement);

  const handleClick = () => {
    setOpenModal(false);
    axios
      .post("http://localhost:3001/res/addReservations", {
        id_trajet,
        id_passager,
        id_conducteur,
        nombre_places,
        date_reservation,
        statut_reservation,
        prix_total,
        mode_paiement,
      })
      .then((response) => {
        console.log(response);
        setIsReserved(true); // Update isReserved to true after successful reservation
        setAvailableSeats((prevSeats) => prevSeats - nombre_places);

        axios
          .put("http://localhost:3001/res/updateSeats", {
            id_trajet,
            nombre_places,
          })
          .then((response) => {
            console.log(response);
            navigate("/paiment");
          })
          .catch((err) => {
            // Handle reservation error
            console.error("Error making reservation:", err);
          });
      })
      .catch((err) => {
        // Handle reservation error
        console.error("Error making reservation:", err);
      });
  };

  console.log(mode_paiement);
  console.log(isReserved);

  return (
    <div className="mx-auto flex my-11  w-2/3 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300  hover:shadow-lg">
      <div className="p-4 ">
        <h2 className="mt-2 text-lg font-medium dark:text-white text-gray-900">
          🧑‍✈️ {clickedPost.nomconducteur}
        </h2>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          🚗 Covoiturage de {clickedPost.depart} à {clickedPost.arrivee} -
          Places disponibles pour {availableSeats} personnes
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          📍 Départ: {clickedPost.depart}, Tunis
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          📍 Destination: {clickedPost.arrivee}, Tunis
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          📅 Date et heure de départ: {clickedPost.date.substring(0, 10)} ,{" "}
          {clickedPost.date.substring(11, 16)}{" "}
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          ✅ Places disponibles: {availableSeats}
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          💬 Description :
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          {clickedPost.desc}
        </p>
        <p>
          🚨 Veuillez prévoir d&apos;arriver à l&apos;heure convenue pour le
          départ. Le partage des frais se fera équitablement entre les
          passagers.
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          📞 {clickedPost.contact}{" "}
        </p>
        <p className="my-3 text-base dark:text-gray-300 text-gray-700">
          🚦 Conditions: {clickedPost.firstline}
        </p>
        <div className="flex mt-3 items-center">
          <p className="mr-2  text-base dark:text-gray-300 text-gray-700">
            Review :
          </p>
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
          <img className="w-5 text-yellow-500" src="/assets/star.svg" alt="" />
        </div>

        <div className="flex items-center justify-between  ">
          <div className="flex  items-center ">
            <p className="mr-2 my-2 text-lg font-semibold text-gray-900 dark:text-white">
              prix :
            </p>
            <p className="text-base my-2 font-medium text-gray-500  dark:text-gray-300">
              {clickedPost.price}dt
            </p>
          </div>
          {availableSeats > 0 ? (
            <Button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setOpenModal(true)}
            >
              Reserver
            </Button>
          ) : (
            <p className="text-red-500">Il n y a plus de places disponibles</p>
          )}
        </div>
      </div>
      <Modal
        show={openModal}
        size={modalSize}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>Confirmation de réservation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 p-6">
            <p className="text-lg  font-serif leading-relaxed text-gray-950 dark:text-gray-400">
              Veuillez confirmer les détails de votre réservation :
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              nombre de places disponible : {clickedPost.place}
            </p>
            <div className="flex items-center">
              <p className="text-base leading-relaxed text-gray-500">
                nombre de places à réserver :
              </p>
              <div className="relative h-11 w-48 min-w-[200px] ml-2">
                <input
                  type="text"
                  className="peer h-full w-full rounded-md border border-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="password"
                  className="label before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
                >
                  places
                </label>
              </div>
            </div>
            {erreur && (
              <div className="text-red-500">
                Le nombre de places réservées ne peut pas dépasser le nombre de
                places disponibles.
              </div>
            )}
            <p className="text-base leading-relaxed text-gray-500">
              le prix total est : {prix_total} dt
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              méthode de paiment :
            </p>
            <div className="relative z-20">
              <select
                className="relative z-20 w-full appearance-none rounded-lg border border-stroke dark:border-dark-3 bg-transparent py-[10px] px-5 text-dark-6 outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2"
                value={mode_paiement}
                onChange={(e) => setMode_paiement(e.target.value)}
              >
                <option value="PayPal" className="dark:bg-dark-2">
                  PayPal
                </option>
                <option value="Card" className="dark:bg-dark-2">
                  Card
                </option>
              </select>
              <span className="absolute right-4 top-1/2 z-10 mt-[-2px] h-[10px] w-[10px] -translate-y-1/2 rotate-45 border-r-2 border-b-2 border-body-color"></span>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => handleClick()}>Continuer</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Retour
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MoreInfo;
