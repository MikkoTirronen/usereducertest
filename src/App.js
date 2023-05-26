import HomePageComponent from "./components/Pages/HomePageComponent";
import { Routes, Route } from "react-router-dom";
import LoginPageComponent from "./components/Pages/LoginPageComponent";
import SettingsPageComponent from "./components/Pages/SettingsPageComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageComponent />} />
        <Route path="/settings" element={<SettingsPageComponent />} />
        <Route path="/login" element={<LoginPageComponent />} />
      </Routes>
    </>
  );
}
export default App;
