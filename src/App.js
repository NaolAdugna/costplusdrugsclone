//React Family
import { createBrowserRouter } from "react-router-dom";
import { Route, RouterProvider, createRoutesFromElements } from "react-router";
//External Family
import RootLayout from "./Layout/RootLayout";
import Home from "./Pages/Home";
import Provide from "./Pages/Provide";
import PageNotFound from "./Pages/PageNotFound";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route to="naoladugnacostplusdrugsclone" element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="provide" element={<Provide />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
