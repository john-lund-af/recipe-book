import RecipeCard from '../components/RecipeCard';
import dummyData from '../assets/data/dummyData.json';
import {useState} from 'react';
import SearchInputField from '../components/SearchInputField';

function HomePage() {
  const [recipes] = useState(dummyData.recipes);

  return (
    <main>
      <section className='fixed w-full flex flex-row justify-center bg-gray-100 py-4' id="filter">
        <SearchInputField />
      </section>
      <section id="cardList" className="pt-32 flex flex-row justify-center gap-4 flex-wrap">
        {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}  />)}
      </section>
    </main>
  )
}

export default HomePage