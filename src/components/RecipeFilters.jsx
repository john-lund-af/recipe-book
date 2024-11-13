// import {useState} from 'react';
import PropTypes from 'prop-types';

function RecipeFilters({onSearchValue}) {
  // const [localSearchValue, setLocalSearchValue] = useState("");
  const tags = ["Pizza","Italian","Vegetarian","Stir-fry","Asian","Cookies","Dessert","Baking","Pasta","Chicken","Salsa","Salad","Quinoa","Bruschetta","Beef","Caprese","Shrimp","Biryani","Main course","Indian","Pakistani","Karahi","Keema","Potatoes","Kebabs","Saag","Roti","Ramen","Japanese","Soup","Tagine","Chickpea","Moroccan","Bibimbap","Korean","Rice","Moussaka","Greek","Butter chicken","Curry","Thai","Lassi","Mango","Tiramisu","Turkish","Grilling","Smoothie","Blueberry","Banana","Elote","Mexican","Street food","Borscht","Russian","Dosa","Falafel","Lebanese","Wrap","Caipirinha","Brazilian","Cocktail"];

  return (
    <>
      <div id="searchField" className="flex-1 text-center">
        <input onChange={(e) => onSearchValue(e.target.value)} className="font-input text-skin-secondary w-3/4 p-2 border border-gray-300 rounded-lg text-lg" type="text" name="filtering" id="filtering" placeholder="Search for title..." />
      </div>
      <div id="tags">
        {tags.map(tag => {
          return (<div key={tag} className="flex items-center mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">{tag}</label>
          </div>)
        })}
      </div>
    </>
  )
}

RecipeFilters.propTypes = {
  onSearchValue: PropTypes.func.isRequired
}

export default RecipeFilters