import Link from "next/link";

export default function RegistrationSuccess() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-6">
          Registration Successful
        </h1>
        <p className="mb-6 text-gray-700">Your account has been created successfully.</p>
        <div className="flex flex-col items-center mt-10 gap-4">
          <Link
            href="/login"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Go to Login
          </Link>
        </div>
      </div>
    </main>
  );
}
