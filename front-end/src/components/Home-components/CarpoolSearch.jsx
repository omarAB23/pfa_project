
function CarpoolSearch() {
  return (
    <section className="search bg-cover h-96 bg-no-repeat" style={{backgroundImage: "url('assets/hero 1.png')"}}>
      <div className="tittle pt-10 text-white font-bold flex flex-col items-center">
        <h2 className="text-2xl">TROUVEZ</h2>
        <h1 className="text-3xl">UN COVOITURAGE</h1>
        <p className="text-lg">Covoiturez sur tous vos types de trajets sans aucune commission.</p>
      </div>
      <div className="search-input-wrapper flex-row flex justify-between items-top px-20 mt-20">
        <div className="search-input flex items-center">
          <div className="h-14 flex items-center justify-center rounded-l-3xl bg-white">
            <img className="h-8 px-4" src="assets/villededepart.svg" alt="" />
          </div>
          <input className="outline-none h-14 w-96 rounded-r-3xl border-none" placeholder="Address de départ" type="text" />
        </div>

        <div className="search-input  flex items-center">
          <div className="h-14 flex items-center justify-center rounded-l-3xl bg-white">
            <img className="h-8 px-4" src="assets/villedarrive.svg" alt="" />
          </div>
          <input className="outline-none h-14 w-96 rounded-r-3xl border-none" placeholder="Address d'arrivée" type="text" />
        </div>


        <div className="search-button flex items-center">
          <button className="outline-none h-12 bg-green-500 text-white font-bold px-4 py-2">lancer une recherche</button>
          <div className="bg-green-600 h-12 flex items-center justify-center">
            <img className="px-2 h-8" src="assets/search.svg" alt="" />
          </div>
        </div>

      </div>
    </section>
  );
}

export default CarpoolSearch;
