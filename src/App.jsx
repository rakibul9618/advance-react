import { Route, Routes } from "react-router";
import "./App.css";
import Container from "./components/container_components/container.component";

import ControlledComponent from "./components/controlled_component";
import Home from "./components/home.component";
import UncontrolledComponent from "./components/uncontrolled_component";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="container" element={<Container />} />
      <Route path="controlled" element={<ControlledComponent />} />
      <Route path="uncontrolled" element={<UncontrolledComponent />} />
    </Routes>
  );
}

export default App;
