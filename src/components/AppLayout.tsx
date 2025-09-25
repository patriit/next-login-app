import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: Props) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        {children}
      </div>
    </main>
  );
}
