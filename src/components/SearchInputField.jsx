// import {useState} from 'react';
import PropTypes from 'prop-types';

function SearchInputField({onSearchValue}) {
  // const [localSearchValue, setLocalSearchValue] = useState("");

  return (
    <div className="flex-1 text-center">
      <input onChange={(e) => onSearchValue(e.target.value)} className="font-input text-skin-secondary w-3/4 p-2 border border-gray-300 rounded-lg text-lg" type="text" name="filtering" id="filtering" placeholder="Search for title..." />
    </div>
  )
}

SearchInputField.propTypes = {
  onSearchValue: PropTypes.func.isRequired
}

export default SearchInputField