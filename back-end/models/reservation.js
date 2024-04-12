const mongoose = require("mongoose");

// Définition du schéma de réservation
const reservationSchema = new mongoose.Schema({
  id_trajet: {
    type: String,
    required: true,
  },
  id_passager: {
    type: String,
    required: true,
  },
  id_conducteur: {
    type: String,
    required: true,
  },
  date_reservation: {
    type: Date,
    default: Date.now,
  },
  nombre_places: { type: Number, required: true },
  statut_reservation: {
    type: String,
    default: "en attente", // Valeur par défaut
  },
  prix_total: { type: Number, required: true },
  mode_paiement: { type: String, required: true },
});

// Création du modèle de réservation à partir du schéma
const Reservation = mongoose.model("Reservation", reservationSchema);

module.exports = Reservation;
