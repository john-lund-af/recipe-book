import { Routes, Route } from 'react-router-dom'
import RecipePage from './pages/RecipePage'
import HomePage from './pages/HomePage'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header title="Recipe Book" />
        <div className="pt-32">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/recipe/new" element={<h1>New Recipe</h1>}/>
            <Route path="/recipe/:id" element={<RecipePage/>} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
    </>
  )
}

export default App
