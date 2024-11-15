import { Routes, Route } from 'react-router-dom'
import RecipePage from './pages/RecipePage'
import HomePage from './pages/HomePage'
import Header from './components/Header'
import RecipeContextProvider from './context/RecipeContextProvider';
import AboutPage from './pages/AboutPage';

function App() {

  return (
    <>
      <Header title="Recipe Book" />
        <div className="pt-[96px]">
          <RecipeContextProvider>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/recipe/:id" element={<RecipePage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </RecipeContextProvider>
        </div>
    </>
  )
}

export default App
