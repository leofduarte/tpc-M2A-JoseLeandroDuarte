import { Route, Routes } from "react-router-dom";
import Todo from "./pages/Todo";
import Todo2 from "./pages/Todo2";
import Index from "./pages/Index";
import ATM from "./pages/Atm";
import CatApi from "./pages/CatApi";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/ex1" element={<Todo />} />
      <Route path="/ex2" element={<Todo2/>} />
      <Route path="/ex3" element={<ATM />} />
      <Route path="/ex4" element={<CatApi />} />
    </Routes>
  );
}

export default App;
