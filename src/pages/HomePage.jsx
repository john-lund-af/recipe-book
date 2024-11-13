import RecipeCard from '../components/RecipeCard';
import dummyData from '../assets/data/dummyData.json';
import {useState} from 'react';
import SearchInputField from '../components/SearchInputField';

function HomePage() {
  const [recipes] = useState(dummyData.recipes);
  const [searchValue, setSearchValue] = useState("");

  function handleSearchValue(value){
    setSearchValue(value)
  }

  const filteredRecipes = !searchValue ? [...recipes] : recipes.filter(recipe => {
    return recipe.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase());
  });

  return (
    <main>
      <section className='fixed w-full flex flex-row justify-center bg-gray-100 py-4' id="filter">
        <SearchInputField onSearchValue={handleSearchValue} />
      </section>
      <section id="cardList" className="pt-32 flex flex-row justify-center gap-4 flex-wrap">
        {filteredRecipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}  />)}
      </section>
    </main>
  )
}

export default HomePage