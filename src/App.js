import BOB from "./pages/BOB/BOB";
import Home from "./pages/Home/Home";
import Saved from "./pages/Saved/Saved";
import Login from "./pages/Login/Login"
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register"
import BOBAdmin from "./pages/BOBAdmin/BOBAdmin";
import Followed from "./pages/Followed/Followed";
import HomeAdmin from "./pages/HomeAdmin/HomeAdmin";
import Notifications from "./pages/Notifications/Notifications";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bob/" element={<BOB />} />
        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/saved/" element={<Saved />} />
        <Route path="/register" element={<Register />} />
        <Route path="/followed/" element={<Followed />} />
        <Route path="/bobadmin/" element={<BOBAdmin />} />
        <Route path="/homeadmin/" element={<HomeAdmin />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/notifications/" element={<Notifications />} />
      </Routes>
    </Router>
  );
}
export default App;
