const Benefits = () => {
  return (
    <section className="benefits bg-green-500 pt-10 pb-10 pl-4 sm:pl-24">
      <h3 className="text-white text-3xl font-bold mb-4">
        ÉCONOMIQUE, CONVIVIAL ET ÉCOLOGIQUE
      </h3>
      <div className="p-container w-4/5 md:flex-row flex-col flex gap-9 sm:gap-20">
        <p className="text-white font-bold text-lg leading-7 lg:w-1/2">
          En partageant votre trajet sur LinkRide, vous profitez facilement des
          avantages du covoiturage : économies, convivialité et impact positif
          sur l’environnement.
        </p>
        <p className="text-white font-bold text-lg leading-7 lg:w-725">
          LinkRide vous trouve le covoitureur idéal, pour tous vos trajets.
          Placez votre annonce, contactez des chauffeurs et passagers qui vous
          plaisent et embarquez !
        </p>
      </div>
    </section>
  );
};

export default Benefits;
