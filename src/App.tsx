import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Game from "./pages/Game"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Game />
          </>
        } >

        </Route>
      </Routes>

    </Router>
  )
}

export default App
