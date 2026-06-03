import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Chatbot } from "./Chatbot";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
