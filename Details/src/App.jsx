import { BrowserRouter, Routes, Route } from "react-router-dom";
import Patients from "./Patients";
import Vaccines from "./Vaccines";
import Centers from "./Centers";
import Home from "./Home";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/vaccines" element={<Vaccines />} />
          <Route path="/centers" element={<Centers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
