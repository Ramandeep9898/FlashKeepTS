import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Auth } from "./components/Auth.component/Auth.component/Auth";
import { RestrictedRoute } from "./components/RestrictedRoute.components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute.component/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<RestrictedRoute />}>
          <Route path="/" element={<Auth />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>

        {/* <Route path="/mockman" element={<MockAPI />} /> */}
      </Routes>
    </div>
  );
}

export default App;
