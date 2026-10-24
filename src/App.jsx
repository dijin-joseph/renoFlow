import "./App.css";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/login";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={
            <>
              <Navbar />
              <div className="app-layout">
                <Sidebar />
                <Content />
              </div>
            </>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
