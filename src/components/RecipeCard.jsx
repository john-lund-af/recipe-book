import PropTypes from 'prop-types';

function RecipeCard({recipe}) {

  return (
    <div className="py-4 max-w-[350px] md:max-w-md rounded-lg shadow-lg">
      <img className="w-full" src={recipe.image} alt={recipe.name} />
      <div className="px-6 py-4">
        <div className="text-center text-xl mb-2">{recipe.name}</div>
      </div>
      <div className="px-6 py-4 flex flex-row justify-between">
        <span><strong>Cuisine:</strong> {recipe.cuisine}</span>
        <span><strong>Preparation time</strong> {recipe.prepTimeMinutes}</span>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        {recipe.tags.map(tag => <span key={tag} className="inline-block bg-skin-fill px-3 py-1 text-sm text-skin-inverted mr-2 mb-2">#{tag}</span>)}        
      </div>
    </div>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default RecipeCard