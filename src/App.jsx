import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Books from "./pages/Books";
import Landing from "./pages/Landing";
import SingleBooks from "./pages/SingleBooks";
import AddBooks from "./pages/AddBooks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/single-book" element={<SingleBooks />} />
        <Route path="/add-book" element={<AddBooks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// Comment
