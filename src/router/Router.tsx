import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/home/Home";
import Signin from "../pages/signin/Signin";
import UserList from "../pages/userlist/UserList";

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
          <Route path="userlist" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
