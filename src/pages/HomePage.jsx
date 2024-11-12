import RecipeCard from '../components/RecipeCard';
import dummyData from '../assets/data/dummyData.json';
import {useState} from 'react';

function HomePage() {
  const [recipes] = useState(dummyData.recipes);

  return (
    <main>
      <h1>HOME PAGE</h1>
      <section id="cardList" className="flex flex-row justify-center gap-4 flex-wrap">
        {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe}  />)}
      </section>
    </main>
  )
}

export default HomePage