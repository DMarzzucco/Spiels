import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Game } from "./pages"
import Footer from "./components/common/Footer"
import { AuthProvider } from "./context"
function App() {

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<><Home /><Footer /></>} >
          </Route>
          <Route path="/Game" element={<><Game /></>}>
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
