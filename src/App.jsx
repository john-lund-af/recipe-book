import { Routes, Route } from 'react-router-dom'
import RecipePage from './pages/RecipePage'
import HomePage from './pages/HomePage'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header title="Recipe Book" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe/new" element={<h1>New Recipe</h1>}/>
        <Route path="/recipe/:id" element={<RecipePage/>} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
