import "./App.css";
import Home from "./pages/HomePage";
import Room from "./pages/RoomPage";
import SingleRoom from "./pages/SingleRoompage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/rooms/" element={<Room />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
