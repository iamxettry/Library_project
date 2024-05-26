import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Landing from "./Components/Landing";
import Mainhead from "./Components/Mainhead";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Location from "./pages/Location";
import "./App.css";
import BookList from "./pages/BookList";
import PathBox from "./Components/PathBox";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
       
          <Route element={<Mainhead />}>
            <Route path="home" element={<Home />} />
            <Route path="home/booklist" element={<BookList />} />
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<About />} />
            <Route path="location" element={<Location />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
