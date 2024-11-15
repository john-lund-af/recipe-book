import {useParams} from 'react-router-dom';
import {useContext} from 'react';
import RecipeContext from '../context/RecipeContext';
import RecipeDetails from '../components/RecipeDetails';

function RecipePage() {
  const {id} = useParams();
  const {recipes} = useContext(RecipeContext);

  const recipe = recipes.find(recipe => recipe.id?.toString() === id);

  if(!recipe)
    return <h1 className="text-4xl text-red-700 text-center pt-4">Recipe not found :-(</h1>


  return (
    <main className='pt-4 md:container md:px-24 mx-auto'>
      <RecipeDetails recipe={recipe} />
    </main>
  )
}

export default RecipePage