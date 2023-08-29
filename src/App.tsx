import { BrowserRouter  , Route , Routes} from "react-router-dom"
import Layout from "./components/Layout";

import './index.css';
import { Home, Leads, Patients, Payments, Schedule, Settings } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
