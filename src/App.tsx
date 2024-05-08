import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Game } from "./pages"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
          </>
        } >
        </Route>
        <Route path="/Game" element={
          <>
            <Game />
          </>
        }>
        </Route>
      </Routes>

    </Router>
  )
}

export default App
