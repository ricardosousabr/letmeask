import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes  } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/Newroom";

export const TestContext = createContext({} as any)

function App() {
  const [value, setValue] = useState('Test')

  return (
    <BrowserRouter>
      <TestContext.Provider value={{ value, setValue}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </TestContext.Provider>
    </BrowserRouter>
  );
}

export default App;
