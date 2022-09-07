import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route element={<RestrictedRoute />}>
            <Route path="/" element={<Auth />} />
          </Route> */}

        {/* <Route element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/:username" element={<User />} />
            <Route path="/:username/:postId" element={<Comment />} />
            <Route path="/explore" element={<Explore />} />
          </Route> */}
        <Route path="/" element={<Home />} />

        {/* <Route path="/mockman" element={<MockAPI />} /> */}
      </Routes>
    </div>
  );
}

export default App;
