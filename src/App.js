import "./App.scss";
import Navigation from "./commponents/Navigation/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Memory from "./pages/Memory/Memory";
import RollDice from "./pages/RollDice/RollDice";

function App() {
  return (
    <main>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/memory" element={<Memory />} />
        <Route path="/rolldice" element={<RollDice />} />
      </Routes>
    </main>
  );
}

export default App;
