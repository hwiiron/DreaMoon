import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import MyCalendar from "../pages/MyCalendar/MyCalendar";
import UserList from "../pages/UserList/UserList";

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
          <Route path="myCalendar" element={<MyCalendar />} />
          <Route path="userlist" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
