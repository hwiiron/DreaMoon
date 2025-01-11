import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";

type HeaderProp = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

function Router({ isDarkMode, toggleTheme }: HeaderProp) {
  return (
    <BrowserRouter>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signin" element={<Signin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
