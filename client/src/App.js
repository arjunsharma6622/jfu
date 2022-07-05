import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";

import {BrowserRouter, Route, Routes} from "react-router-dom"
import StoreData from "./pages/StoreData/StoreData";
import Franchise from "./pages/Franchise/Franchise";
import Admin from "./pages/Admin/Admin";
import Kids from "./pages/Kids/Kids";
import ImageUpload from "./pages/ImgUpload/Upload";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/stores" element={<StoreData />} />
        <Route exact path="/contact" element={<Franchise />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/kids" element={<Kids />} />
        <Route exact path="/upload" element={<ImageUpload />} />
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
