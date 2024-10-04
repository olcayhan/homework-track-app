import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Submission from "./pages/Submission";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/submission" element={<Submission />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
