import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainContainer } from "./component/main-container";

import "./styles/index.scss";

function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainContainer />} />
        <Route exact path="/:key/:page" element={<MainContainer />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
