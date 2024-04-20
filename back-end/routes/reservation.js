const express = require("express");
const router = express.Router();
const Reservation = require("../models/reservation");
const PostModel = require("../models/post");

// Route pour la confirmation de réservation
router.post("/addReservations", async (req, res) => {
  try {
    // Récupérer les détails de la réservation depuis le corps de la requête
    const {
      id_trajet,
      id_passager,
      id_conducteur,
      nombre_places,
      date_reservation,
      statut_reservation,
      prix_total,
      mode_paiement,
    } = req.body;

    // Créer une nouvelle réservation dans la base de données
    const newReservation = new Reservation({
      id_trajet,
      id_passager,
      id_conducteur,
      nombre_places,
      date_reservation,
      statut_reservation,
      prix_total,
      mode_paiement,
    });

    // Sauvegarder la réservation dans la base de données
    const savedReservation = await newReservation.save();
    // Envoyer une réponse de succès
    res.status(201).json({
      status: true,
      message: "reservation added",
      data: savedReservation,
    });
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur
    res.status(500).json({ message: error.message });
  }
});

router.put("/updateSeats", async (req, res) => {
  const { id_trajet, nombre_places } = req.body;
  try {
    const trajet = await Reservation.findOne({ id_trajet });
    if (!trajet) {
      return res.status(404).json({ error: "trajet n'a pas été trouvée" });
    }
    trajet.nombre_places -= nombre_places;

    await trajet.save();
    const post = await PostModel.findOneAndUpdate(
      { _id: trajet.id_trajet },
      { $inc: { place: -nombre_places } }, // Decrease the number of seats
      { new: true }
    );

    return res.status(200).json({
      message: "Reservation updated succefully",
      data: trajet,
      Post: post,
    });
  } catch (err) {
    console.error("Error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/getUserReservation", async (req, res) => {
  const { idFromToken } = req.body;

  // Search for posts where the user ID (idconducteur) matches idFromToken
  const userRes = await Reservation.find({ id_conducteur: idFromToken });

  if (!userRes) {
    return res.json({
      status: false,
      message: "No Reservation found for this user",
    });
  }

  return res.json({ status: true, data: userRes });
});

const ResRouter = router;
module.exports = ResRouter;
