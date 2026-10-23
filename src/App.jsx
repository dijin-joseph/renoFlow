import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/login";
import { Navbar } from "./components/navbar";
import { Sidebar } from "./components/sidebar";
import { Content } from "./components/content";

function App() {
  return (
    <BrowserRouter>
      <Routes>
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
    </BrowserRouter>
  );
}

export default App;
