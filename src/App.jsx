import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <Routes>
      <Route path="/" element={<h1>Start Page</h1>} />
      <Route path="/recipe/new" element={<h1>New Recipe</h1>}/>
      <Route path="/recipe/:id" element={<h1>Tacos Recipe</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default App
