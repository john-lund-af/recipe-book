import RecipeCard from '../components/RecipeCard';
import RecipeContext from '../context/RecipeContext';
import {useState, useContext} from 'react';
import RecipeFilters from '../components/RecipeFilters';

function HomePage() {
  const {recipes} = useContext(RecipeContext);
  const [recipeName, setRecipeName] = useState("");
  const [cuisineType, setCuisineType] = useState("all");

  function handleFilterChange(recipeName, cuisineType){
    setRecipeName(recipeName);
    setCuisineType(cuisineType)
  }

  let filteredRecipes = cuisineType === 'all' ? [...recipes] : recipes.filter(recipe => recipe.cuisine.toLowerCase() === cuisineType.toLowerCase());
  filteredRecipes = !recipeName ? [...filteredRecipes] : recipes.filter(recipe => recipe.name.toLocaleLowerCase().includes(recipeName.toLocaleLowerCase()));

  return (
    <main>
      <section className='fixed w-full bg-gray-100 py-4' id="filter">
        <RecipeFilters onFilterChange={handleFilterChange} />
      </section>
      <section id="cardList" className="pt-32 flex flex-row justify-center gap-4 flex-wrap">
        {filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}  />)}
      </section>
    </main>
  )
}

export default HomePage