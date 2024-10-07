import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/dashboard";
import DataInput from "./pages/data-input";
import ForecastResults from "./pages/forecast-results";
import RiskAssessment from "./pages/rish-assessment";
import ScenarioAnalysis from "./pages/scenario-analysis";
import Reports from "./pages/reports";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        
          <Route index element={<Home children={undefined} />} />
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/data-input" element={<DataInput />}></Route>
          <Route path="/forecast-results" element={<ForecastResults />}></Route>
          <Route path="/risk-assessment" element={<RiskAssessment />}></Route>
          <Route path="/scenario-analysis" element={<ScenarioAnalysis />}></Route>
          <Route path="/reports" element={<Reports />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
