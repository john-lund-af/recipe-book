import PropTypes from 'prop-types';

function RecipeDetails({recipe}) {
  return <section className='flex flex-col lg:flex-row gap-4'>
      <div className="md:flex-1">
        <img src={recipe.image} alt={recipe.name} />
      </div>
      <div id="recipe-content" className='pt-4 px-2 bg-skin-secondary md:flex-1'>
        <h1 id="recipeTitle" className="py-2 text-3xl font-title text-center">{recipe.name}</h1>
        <section className="py-4 text-skin-inverted">
          <ul className='flex flex-row gap-2'>
            {recipe.tags.map(tag => <li key={tag} className="px-1 bg-skin-fill">{tag}</li>)}
          </ul>
        </section>
        <section id="recipeInfo">
          <div id="prepTimeInMinutes">
            <span className="font-bold">Preparation time in minutes:</span><span>{recipe.prepTimeMinutes}</span>
          </div>
          <div id="cookTimeInMinutes">
            <span className="font-bold">Cooking time in minutes:</span><span>{recipe.cookTimeMinutes}</span>
          </div>
          <div id="servings">
            <span className="font-bold">Servings:</span><span>{recipe.servings}</span>
          </div>
          <div id="caloriesPerServing">
            <span className="font-bold">Calories per serving:</span><span>{recipe.caloriesPerServing} kcal</span>
          </div>
        </section>
        <section id="ingredients" className="py-4">
          <h5 className="font-bold font-title py-2">Ingredients</h5>
          <ul>
            {recipe.ingredients.map(ingr => <li key={ingr}>{ingr}</li>)}
          </ul>
        </section>
        <section id="instructions" className="py-4">
          <h5 className="font-bold font-title py-2">Instructions</h5>
          <ul>
            {recipe.instructions.map(instr => <li key={instr}>{instr}</li>)}
          </ul>
        </section>
      </div>
  </section>;
}

RecipeDetails.propTypes = {
  recipe: PropTypes.object.isRequired
}

export default RecipeDetails;
