import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/Header";
import Home from "../pages/Home/Home.tsx";
import Signin from "../pages/Signin/Signin.tsx";
import MyCalendar from "../pages/MyCalendar/MyCalendar.tsx";
import UserList from "../pages/UserList/UserList.tsx";

type HeaderProp = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

function Router({ isDarkMode, toggleTheme }: HeaderProp) {
  return (
    <BrowserRouter>
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signin" element={<Signin />} />
        <Route path="myCalendar" element={<MyCalendar />} />
        <Route path="userlist" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
