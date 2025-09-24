import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-4">Dashboard</h1>
        <p className="mb-6 text-gray-700">
          Welcome to your dashboard. You're logged in!
        </p>
        <div className="flex flex-col items-center mt-10 gap-4">
          <Link
            href="/logout"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Log out
          </Link>
        </div>
      </div>
    </main>
  );
}
