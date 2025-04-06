import { Routes, Route } from "react-router-dom";
import NamePage from "./pages/NamePage";
import SelectPage from "./pages/SelectPage";
import FinalPage from "./pages/FinalPage";
import ThankPage from "./pages/ThankPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<NamePage />} />
      <Route path="/select" element={<SelectPage />} />
      <Route path="/final" element={<FinalPage />} />
      <Route path="/thank" element= {<ThankPage/>} />
    </Routes>
  );
}

export default App;
