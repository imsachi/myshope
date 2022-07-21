import "./App.css";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import ProductDetailsPage from "./Components/ProductDetailsPage";
import { Store } from "./Components/Store";

function App() {
  const params = useParams();
  return (
    <Store>
      <BrowserRouter>
        <div className="App ">
          <Navbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/:userId" element={<ProductDetailsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Store>
  );
}

export default App;
