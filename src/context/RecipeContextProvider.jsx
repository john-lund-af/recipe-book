import PropTypes from 'prop-types';
import RecipeContext from './RecipeContext';
import dummyData from '../assets/data/dummyData.json';
import {useState} from 'react';

const RecipeContextProvider = ({children}) => {
  const [recipes, setRecipes] = useState(dummyData.recipes);

  return <RecipeContext.Provider value={{recipes, setRecipes}}>{children}</RecipeContext.Provider>
}

RecipeContextProvider.propTypes = {
  children: PropTypes.node
}

export default RecipeContextProvider;