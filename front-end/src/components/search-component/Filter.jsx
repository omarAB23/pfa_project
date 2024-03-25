
const FilterForm = () => {
  return (
    <details open className="m-10 max-w-md h-full w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700">
      <summary className="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
        <span className="text-sm font-medium"> Toggle Filters </span>
        <svg
          className="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path  d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>

      <form action="" className="flex border-t border-gray-200 lg:border-t-0">
        <fieldset className="w-full">
          <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Nombre de place</legend>

          <div className="space-y-2 px-5 py-6">
            <div className="flex items-center">
              <input id="Nombre de place" type="radio" name="Nombre de place" className="h-5 w-5 rounded border-gray-300" defaultChecked />

              <label htmlFor="Nombre de place" className="ml-3 text-sm font-medium"> 1 </label>
            </div>

            <div className="flex items-center">
              <input id="Nombre de place" type="radio" name="Nombre de place" className="h-5 w-5 rounded border-gray-300" />

              <label htmlFor="Nombre de place" className="ml-3 text-sm font-medium"> 2 </label>
            </div>

            <div className="flex items-center">
              <input id="Nombre de place" type="radio" name="Nombre de place" className="h-5 w-5 rounded border-gray-300" />

              <label htmlFor="Nombre de place" className="ml-3 text-sm font-medium"> 3 </label>
            </div>
            <div className="flex items-center">
              <input id="Nombre de place" type="radio" name="Nombre de place" className="h-5 w-5 rounded border-gray-300" />

              <label htmlFor="Nombre de place" className="ml-3 text-sm font-medium"> 4 ou plus </label>
            </div>

            <div className="pt-2">
              <button type="button" className="text-xs text-gray-500 underline">Reset Type</button>
            </div>
          </div>
        </fieldset>

        <fieldset className="w-full">
          <legend className="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price</legend>

          <div className="space-y-2 px-5 py-6">
            
          <div className="relative mb-6">
            <label htmlFor="labels-range-input" className="sr-only">Labels range</label>
            <input id="labels-range-input" type="range" value="1000" min="100" max="1500" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-0 -bottom-6">Min ($100)</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-1/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$500</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute start-2/3 -translate-x-1/2 rtl:translate-x-1/2 -bottom-6">$1000</span>
            <span className="text-sm text-gray-500 dark:text-gray-400 absolute end-0 -bottom-6">Max ($1500)</span>
        </div>

           

            <div className="pt-2">
              <button type="button" className="text-xs text-gray-500 underline">Reset Price</button>
            </div>
          </div>
        </fieldset>
      </form>

      <div>
        <div className="flex justify-between border-t border-gray-200 px-5 py-3">
          <button name="reset" type="button" className="rounded text-xs font-medium text-gray-600 underline">Reset All</button>

          <button name="commit" type="button" className="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
        </div>
      </div>
    </details>
  );
};

export default FilterForm;
