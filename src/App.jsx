import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import Volunteer from "./pages/Volunteer";
import WorkForUs from "./pages/WorkForUs";
import Contribution from "./pages/Contribution";
import Nardhomebiz from "./pages/Nardhomebiz";
import Announcement from "./pages/Announcement";
import Signup from "./pages/Signup";
import Joinnow from "./pages/Joinnow";
import Login from "./pages/Login";
function App() {
  return (
    <Router>
      <Routes>
   <Route path="/" element={<Home />} />
   <Route path="/aboutUs" element={<Home/>}/>
   <Route path="/projectsPage" element={<ProjectsPage/>}/> 
   <Route path="/volunteer" element={<Volunteer/>}/>
   <Route path="/workForUs" element={<WorkForUs/>}/>
   <Route path="/contribution" element={<Contribution/>}/>
   <Route path="/nardHomeBiz" element={<Nardhomebiz/>}/>
   <Route path="/announcement" element={<Announcement/>}/>
   <Route path="/signup" element={<Signup/>}/>
   <Route path="/join-now" element={<Joinnow/>}/>
   <Route path="login" element={<Login/>}/>
</Routes>
   </Router>
  );
}

export default App;
