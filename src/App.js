import "./App.css";
import Home from "./screens/Home/Home";
import AboutMMFH from "./screens/AboutMMFH/AboutMMFH";
import Vision from "./screens/Vision/Vision";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Facts from "./screens/Facts/Facts";
import CEOMEessage from "./screens/CEOMessage/CEOMessage";
import Clinics from "./screens/Clinics/Clinics";
import FreeMedicine from "./screens/FreeMedicine/FreeMedicine";
import ContactUs from "./screens/ContactUs/ContactUs";
import BloodDonations from "./screens/BloodDonations/BloodDonations";
import Volunters from "./screens/Volunters/Volunters";
import EveningClinics from "./screens/EveningClinics/EveningClinics";
import Careers from "./screens/Careers/Careers";
import Donations from "./screens/Donations/Donations";
import AllDoctors from "./screens/AllDoctors/AllDoctors";
import DoctorsProfile from "./screens/DoctorsProfile/DoctorsProfile";
import { useLayoutEffect } from "react";
function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };
  return (
    <div className="App">
      <Router>
        <Wrapper>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/AboutMMFH" element={<AboutMMFH />} />
            <Route path="/VisionMissionPhilosophy" element={<Vision />} />
            <Route path="/acts&Stats" element={<Facts />} />
            <Route path="/CEOMessage" element={<CEOMEessage />} />
            <Route path="/OurServices&Clinics" element={<Clinics />} />
            <Route path="/FreeMedicine" element={<FreeMedicine />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/JoinUs" element={<BloodDonations />} />
            <Route path="/Volunteers" element={<Volunters />} />
            <Route path="/EveningClinics" element={<EveningClinics />} />
            <Route path="/Careers" element={<Careers />} />
            <Route path="/Donation" element={<Donations />} />
            <Route path="/AllDoctors" element={<AllDoctors />} />
            <Route path="/DoctorsProfile" element={<DoctorsProfile />} />
          </Routes>
        </Wrapper>
      </Router>
    </div>
  );
}

export default App;
