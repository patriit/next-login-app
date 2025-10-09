import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 to-purple-400 font-sans">
      <Navbar />

      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
