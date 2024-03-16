import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="max-w-6xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </main>
  )
}
