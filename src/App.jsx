import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Layout from "./routes/Layout";
import Home from "./routes/Home";
import AuthRequired from "./routes/AuthRequired";
import Profile from "./routes/Profile";
import Quiz from "./routes/Quiz";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<AuthRequired />}>
          <Route path="profile" element={<Profile />} />
          <Route path="quiz" element={<Quiz />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
