
function AboutPage() {
  return <main className="md:container md:px-24 mx-auto mt-4 bg-skin-secondary md:shadow-lg md:rounded-lg">
    <h1 className="text-2xl font-title">About Recipe Book</h1>
    <section className="py-4">
      <p>
        Welcome to <strong>Recipe Book</strong>, your ultimate destination for discovering delicious recipes! 
        Whether you&apos;re in the mood for a classic Italian pasta, a spicy Indian curry, or a quick snack, we&apos;ve got you covered.
      </p>
      
      <p>
        Our app makes it easy to search for recipes by title or cuisine type, so you can find exactly what you&apos;re craving in seconds. 
        With a diverse collection of recipes from around the globe, Recipe Book is here to inspire your culinary journey.
      </p>

      <h2 className="py-2 text-lg font-title">Why Choose Recipe Book?</h2>
      <ul>
        <li className="pl-2 pb-2"><strong>Intuitive Search:</strong> Quickly locate recipes by name or filter by cuisine type to explore new flavors.</li>
        <li className="pl-2 pb-2"><strong>Diverse Recipes:</strong> From traditional dishes to modern twists, there&apos;s something for every taste.</li>
        <li className="pl-2 pb-2"><strong>Inspiration Anytime:</strong> Browse ideas for breakfast, lunch, dinner, or even desserts!</li>
      </ul>
      <p>
        Start exploring, cooking, and enjoying today with Recipe Book. Happy cooking! 🍴
      </p>
  </section>
  </main>;
}

export default AboutPage;
