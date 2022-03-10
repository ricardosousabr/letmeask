import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/Newroom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
