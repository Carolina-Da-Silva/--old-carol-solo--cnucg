import "./main.css"
import Header from "./components/Header"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./pages/Register"
import Person from "./pages/Person"

function App() {
  return <>
    <Header />
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/cadastro/pessoa" element={<Person />} />
        </Routes>
      </BrowserRouter>
    </main>
    <Footer />
  </>
}

export default App