import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages/SearchPage";
import { MoviePage } from "./pages/MoviePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/movies/:movieId" element={<MoviePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
