import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Books from "./pages/Books";
import Landing from "./pages/Landing";
import SingleBooks from "./pages/SingleBooks";
import AddBooks from "./pages/AddBooks";
import DeleteBookPage from "./pages/DeleteBookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Books />} />
        <Route path="/single-book" element={<SingleBooks />} />
        <Route path="/add-book" element={<AddBooks />} />
        <Route path="/books/:id" element={<SingleBooks />} />
        <Route path="/delete/:id" element={<DeleteBookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
