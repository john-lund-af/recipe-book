# Recipe Book

**Recipe Book** is a modern web application that makes it easy to search for recipes by title or cuisine type. Built with **React 18** and powered by the fast build tool **Vite**, this app offers an intuitive and responsive user experience.

## Features

- **Search Recipes**: Find recipes by title or filter by cuisine type.
- **Responsive Design**: Optimized for all devices.
- **Cookie Notice**: Informs users about cookie usage and tracks their consent.
- **Dynamic Navigation**: Easy-to-use navigation for a seamless experience.
- **Modern Design**: Built with Tailwind CSS for sleek and consistent styling.

---

## Project Structure

The application is composed of functional React components for modularity and maintainability:

### Main Components

- **`App.jsx`**: Root component managing routes and global layout.
- **`HomePage.jsx`**: Displays the main page with search functionality and featured recipes.
- **`RecipePage.jsx`**: Page that shows the chosen recipe details.
- **`AboutPage.jsx`**: Provides information about the app and its purpose.

### Sub-Components

- **`Header.jsx`**: Contains the site’s navigation bar.
- **`RecipeDetails.jsx`**: Shows detailed information about a selected recipe.
- **`RecipeCard.jsx`**: A reusable card component to display recipe previews.
- **`RecipeFilters.jsx`**: Allows filtering recipes by cuisine or title.
- **`CookieNotice.jsx`**: Displays a banner for cookie consent.

### Context Management

- **`RecipeContextProvider.jsx`**: Manages state and provides context for recipes throughout the application.

---

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (v8 or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/john-lund-af/recipe-book.git
   cd recipe-book

2. Install dependencies: 
    ```bash
   npm install

### Running the Application

1. Start the development server:

    ```bash
    npm run dev

The application will be available at http://localhost:5173.


## Dependencies
Key libraries and tools used in this project:

- React 18: For building the UI.
- Vite: A fast build tool for modern web projects.
- React Router DOM: For routing and navigation.
- FontAwesome: For icons.
- Tailwind CSS: For styling.

## Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request. For major changes, open an issue first to discuss your proposed changes.

## License
This project is licensed under the MIT License.

## Acknowledgments
Special thanks to the open-source community for the tools and libraries that make this project possible, and thanks to https://dummyjson.com for the dummydata used in this project.




