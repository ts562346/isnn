import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HtmlPage from "./components/HtmlPage";
import homeHtml from "../public/pages/index.html?raw";
import aboutHtml from "../about.html?raw";
import activityHtml from "../activity.html?raw";
import eventHtml from "../woman.html?raw";
import sermonHtml from "../youth.html?raw";
import blogHtml from "../blog.html?raw";
import teamHtml from "../gallery.html?raw";
import testimonialHtml from "../testimonial.html?raw";
import contactHtml from "../contact.html?raw";
import notFoundHtml from "../404.html?raw";

const pages = [
  { path: "/", html: homeHtml, keyName: "index" },
  { path: "/about", html: aboutHtml, keyName: "about" },
  { path: "/activity", html: activityHtml, keyName: "activity" },
  { path: "/woman", html: eventHtml, keyName: "woman" },
  { path: "/youth", html: sermonHtml, keyName: "youth" },
  { path: "/blog", html: blogHtml, keyName: "blog" },
  { path: "/gallery", html: teamHtml, keyName: "gallery" },
  { path: "/testimonial", html: testimonialHtml, keyName: "testimonial" },
  { path: "/contact", html: contactHtml, keyName: "contact" },
  { path: "/404", html: notFoundHtml, keyName: "404" },
];

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path}
            element={<HtmlPage html={page.html} isHome={page.keyName === "index"} />}
          />
        ))}
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}
