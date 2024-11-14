import PropTypes from 'prop-types';
import {useState, useEffect} from 'react';

const cuisineTypes = ["American","Asian","Brazilian","Greek","Indian","Italian","Japanese","Korean","Lebanese","Mediterranean","Mexican","Moroccan","Pakistani","Russian","Smoothie","Thai","Turkish"];

function RecipeFilters({onFilterChange}) {
  const [selectedCuisine, setSelectedCuisine] = useState("all");
  const [recipeNameSearch, setRecipeNameSearch] = useState("");

  useEffect(() => {
    onFilterChange(recipeNameSearch, selectedCuisine);
  }, [recipeNameSearch, selectedCuisine, onFilterChange]);

  return (
    <div className="flex flex-row justify-center font-input">
      <div className='flex-1 text-center' id="searchField">
        <input onChange={(e) => setRecipeNameSearch(e.target.value)} className="w-full lg:w-2/4 p-2 border border-gray-300 rounded-lg text-lg" type="text" name="filtering" id="filtering" placeholder="Search for title..." />
      </div>
      <div className="flex-1 text-center">
        <select value={selectedCuisine} onChange={(e) => setSelectedCuisine(e.target.value)} className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg w-full lg:w-2/4 focus:outline-none">
          <option value="all">Choose a meal type</option>
          {cuisineTypes.map(ct => <option key={ct} value={ct}>{ct}</option>)}
        </select>
      </div>
    </div>
  )
}

RecipeFilters.propTypes = {
  onFilterChange: PropTypes.func.isRequired
}

export default RecipeFilters