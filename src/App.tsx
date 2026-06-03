/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Programs } from "./pages/Programs";
import { Impact } from "./pages/Impact";
import { GetInvolved } from "./pages/GetInvolved";
import { News } from "./pages/News";
import { Contact } from "./pages/Contact";
import { Donate } from "./pages/Donate";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="impact" element={<Impact />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donate" element={<Donate />} />
        </Route>
      </Routes>
    </Router>
  );
}
