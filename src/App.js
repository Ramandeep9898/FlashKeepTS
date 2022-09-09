import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

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
            <Route path="/" element={<Header />} />

          <Route path="/mockman" element={<MockAPI />} />
        </Routes>
    </div>
  );
}

export default App;
