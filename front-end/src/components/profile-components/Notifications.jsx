import { useState, useEffect } from "react";
import axios from "axios";

const Notifications = () => {
  const [nameFromToken, setNameFromToken] = useState("");
  const [idFromToken, setIdFromToken] = useState("");
  const [listeR, setListeR] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/gettoken")
      .then((response) => {
        setNameFromToken(response.data.token.name);
        return response.data.token.name;
      })
      .then((nameFromToken) => {
        return axios.post("http://localhost:3001/auth/getuser", {
          nameFromToken: nameFromToken,
        });
      })
      .then((response) => {
        const currentUser = response.data.currentUser;
        setIdFromToken(currentUser._id);

        return axios.post("http://localhost:3001/res/getUserReservation", {
          idFromToken: currentUser._id,
        });
      })
      .then(async (response) => {
        const reservationsData = response.data.data;
        console.log(reservationsData);
        const idPassagers = reservationsData.map(
          (reservation) => reservation.id_passager
        );
        console.log(idPassagers);
        const promises = idPassagers.map((id) => {
          return axios.post("http://localhost:3001/auth/getuserById", {
            ID: id,
          });
        });

        return Promise.all(promises).then(async (responses) => {
          console.log(responses);
          const userList = responses.map(
            (response) => response.data.currentUser
          );
          console.log(userList);
          const updatedReservations = reservationsData.map(
            (reservation, index) => {
              return { ...reservation, user: userList[index] };
            }
          );
          console.log(updatedReservations);

          const Promises2 = updatedReservations.map(async (reservation) => {
            try {
              const response = await axios.post(
                "http://localhost:3001/post/getIdPost",
                {
                  id: reservation.id_trajet,
                }
              );
              return response.data;
            } catch (error) {
              console.error("Error fetching post details:", error);
              return null;
            }
          });

          return Promise.all(Promises2).then((responsess) => {
            console.log(responsess);
            const detailsPromises = responsess.map((response) => response.data);
            console.log(detailsPromises);

            const updatedReservationsWithDetails = updatedReservations.map(
              (reservation, index) => {
                return {
                  ...reservation,
                  departure: detailsPromises[index][0].depart,
                  arrival: detailsPromises[index][0].arrivee,
                };
              }
            );

            console.log(updatedReservationsWithDetails);
            setListeR(updatedReservationsWithDetails);
            console.log(listeR);
          });
        });
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {listeR.length === 0 ? ( // Check if listeR is empty
        <p>No notifications</p>
      ) : (
        <ul role="list" className="divide-y divide-gray-100">
          {listeR.map((reservation) => (
            <li
              key={reservation._id}
              className="flex justify-between gap-x-6 py-5"
            >
              <div className="flex min-w-0 gap-x-4">
                <img
                  className="h-12 w-12 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />

                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-serif leading-6 text-gray-900">
                    {reservation.user.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {reservation.user.email}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {reservation.date_reservation.substring(11, 16)}{" "}
                  {reservation.date_reservation.substring(0, 10)}
                </p>
                <p className="text-base font-serif leading-6 text-gray-900">
                  {reservation.departure}-{reservation.arrival}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notifications;
