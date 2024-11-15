import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

function RecipeCard({recipe}) {

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/recipe/${recipe.id}`);
  }

  return (
    <div onClick={handleNavigation} className="hover:cursor-pointer pb-4 max-w-[350px] md:max-w-md rounded-lg shadow-lg bg-skin-secondary">
      <img className="w-full rounded-t-lg" src={recipe.image} alt={recipe.name} />
      <div className="px-6 py-2">
        <div className="text-center text-xl">{recipe.name}</div>
      </div>
      <div className="px-6 py-2 flex flex-row justify-between">
        <span><strong>Cuisine:</strong> {recipe.cuisine}</span>
        <span><strong>Preparation time</strong> {recipe.prepTimeMinutes}</span>
      </div>
      <div className="px-6 py-2 text-center">
        {recipe.tags.map(tag => <span key={tag} className="inline-block bg-skin-fill px-3 py-1 text-sm text-skin-inverted mr-2 mb-2">#{tag}</span>)}        
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default RecipeCard