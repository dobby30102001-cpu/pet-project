import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./page/Home";
import Department from "./page/Department";
import Login from "./page/Login";
import Group from "./page/Group";
import NotFound from "./layout/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailUser from "./page/DetailUser";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/department" element={<Department />} />
            <Route path="/group" element={<Group />} />
            <Route path="/:userID" element={<DetailUser />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </>
  );
}

export default App;
