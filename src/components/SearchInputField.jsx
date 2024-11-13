function SearchInputField() {
  return (
    <div className="flex-1 text-center">
      <input className="font-input text-skin-secondary w-3/4 p-2 border border-gray-300 rounded-lg text-lg" type="text" name="filtering" id="filtering" placeholder="Search for title..." />
    </div>
  )
}

export default SearchInputField