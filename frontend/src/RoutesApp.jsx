import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Default } from "./layouts/Default";
import { Home } from "./pages/Home";

export const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
