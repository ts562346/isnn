import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LegacyPage from "./components/LegacyPage";

const pages = [
  { path: "/", file: "index.html" },
  { path: "/about", file: "about.html" },
  { path: "/activity", file: "activity.html" },
  { path: "/event", file: "event.html" },
  { path: "/sermon", file: "sermon.html" },
  { path: "/blog", file: "blog.html" },
  { path: "/team", file: "team.html" },
  { path: "/testimonial", file: "testimonial.html" },
  { path: "/contact", file: "contact.html" },
  { path: "/404", file: "404.html" },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<LegacyPage file={page.file} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
