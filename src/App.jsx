import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Hobby from './pages/Hobby'
import HobbyDetail from './pages/HobbyDetail'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/hobby' element={<Hobby />} />
          <Route path='/hobby/:id' element={<HobbyDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
