
function RecipePage() {

  return (
    <main className='flex flex-col'>
      <img src="https://cdn.dummyjson.com/recipe-images/2.webp" alt="img desc" />
      <div id="info" className='pt-4 px-2 bg-skin-secondary'>
        <h1 className="text-3xl font-title text-center">Vegetarian Stir-Fry</h1>
        <section id="ingredients" className="py-4">
          <h5 className="font-bold font-title py-2">Ingredients</h5>
          <ul>
            <li>Tofu, cubed</li>
            <li>Broccoli florets</li>
            <li>Soy sauce</li>
            <li>Garlic, minced</li>
          </ul>
        </section>
        <section id="instructions" className="py-4">
          <h5 className="font-bold font-title py-2">Instructions</h5>
          <ul>
            <li>In a wok, heat sesame oil over medium-high heat.</li>
            <li>Add minced ginger and garlic, sauté until fragrant.</li>
            <li>Add cubed tofu and stir-fry until golden brown.</li>
            <li>Add broccoli, carrots, and bell peppers. Cook until vegetables are tender-crisp.</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

export default RecipePage