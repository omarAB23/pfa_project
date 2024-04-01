import PropTypes from "prop-types";
import { useEffect } from "react";

const FilterForm = ({ filters, setFilters, setApplyFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };
  useEffect(() => {
    console.log(filters);
  }, [filters]); // Log filters whenever it changes

  const handleResetFilters = () => {
    setFilters({}); // Reset all filters
  };

  return (
    <details
      open
      className="m-10 max-w-md h-full w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700 hover:scale-105 hover:shadow-lg"
    >
      <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
        <span className="text-sm font-medium"> Toggle Filters </span>
      </summary>

      <form
        action=""
        className="flex border-t border-gray-200 lg:border-t-0 flex-col gap-4 px-5 py-6"
      >
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label htmlFor="departure" className="block text-sm font-medium">
              Departure:
            </label>
            <input
              type="text"
              id="departure"
              name="departure"
              onChange={handleFilterChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-zinc-200"
            />
          </div>
          <div>
            <label htmlFor="arrival" className="block text-sm font-medium">
              Arrival:
            </label>
            <input
              type="text"
              id="arrival"
              name="arrival"
              onChange={handleFilterChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-zinc-200"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium">
              Price:
            </label>
            <input
              type="text"
              id="price"
              name="price"
              onChange={handleFilterChange}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-950"
            />
          </div>
        </div>

        <fieldset className="w-full">
          <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">
            Nombre de place
          </legend>

          <div className="space-y-2 px-5 py-6">
            <div className="flex items-center">
              <input
                id="Nombre1"
                type="radio"
                name="Nombre_de_place"
                value={1}
                className="h-5 w-5 rounded border-gray-300"
                onChange={handleFilterChange}
              />
              <label htmlFor="Nombre1" className="ml-3 text-sm font-medium">
                1
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="Nombre2"
                type="radio"
                name="Nombre_de_place"
                className="h-5 w-5 rounded border-gray-300"
                value={2}
                onChange={handleFilterChange}
              />
              <label htmlFor="Nombre2" className="ml-3 text-sm font-medium">
                2
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="Nombre3"
                type="radio"
                name="Nombre_de_place"
                className="h-5 w-5 rounded border-gray-300"
                value={3}
                onChange={handleFilterChange}
              />
              <label htmlFor="Nombre3" className="ml-3 text-sm font-medium">
                3
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="Nombre4"
                type="radio"
                name="Nombre_de_place"
                className="h-5 w-5 rounded border-gray-300"
                value={4}
                onChange={handleFilterChange}
              />
              <label htmlFor="Nombre4" className="ml-3 text-sm font-medium">
                4
              </label>
            </div>
          </div>
        </fieldset>

        <div className="flex justify-between border-t border-gray-200 px-5 py-3">
          <button
            name="reset"
            type="button"
            onClick={handleResetFilters}
            className="rounded bg-slate-800 px-5 py-3 text-xs font-medium text-white active:scale-95"
          >
            Reset All
          </button>

          <button
            name="commit"
            type="button"
            className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95"
            onClick={() => {
              setApplyFilters(true);
            }}
          >
            Apply Filters
          </button>
        </div>
      </form>
    </details>
  );
};

FilterForm.propTypes = {
  filters: PropTypes.object.isRequired, // Object containing filters
  setFilters: PropTypes.func.isRequired, // Function to update filters
  setApplyFilters: PropTypes.func.isRequired,
};

export default FilterForm;
