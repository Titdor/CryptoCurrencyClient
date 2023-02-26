import React from 'react';
import Card from "./Component/card";
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"
          element={<Card/>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
