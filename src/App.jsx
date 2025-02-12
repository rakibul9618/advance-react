import { Route, Routes } from "react-router";
import "./App.css";
import Container from "./components/container_components/container.component";
import Home from "./components/home.component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="container" element={<Container />} />
    </Routes>
  );
}

export default App;
