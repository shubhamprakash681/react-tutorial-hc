import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import User from "./pages/User.tsx";
import Github from "./pages/Github.tsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,

//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <AboutUs />,
//       },
//       {
//         path: "/contact",
//         element: <ContactUs />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<AboutUs />} />
      <Route path="contact" element={<ContactUs />} />

      <Route path="user/:userId" element={<User />} />
      <Route path="github/:githubId" element={<Github />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
