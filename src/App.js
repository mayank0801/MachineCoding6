import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import RestaurantDetail from "./Page/RestaurantDetail";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:res_id" element={<RestaurantDetail />} />
      </Routes>
    </div>
  );
}
