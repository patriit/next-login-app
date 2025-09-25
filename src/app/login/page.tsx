import Link from "next/link";
import AppLayout from "@/components/AppLayout";

export default function LoginPage() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-6">Login</h1>

      <form>
        <div className="relative mb-4">
          <input
            type="text"
            placeholder=" "
            required
            className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
            Username
          </label>
        </div>

        <div className="relative mb-4">
          <input
            type="password"
            placeholder=" "
            required
            className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
            Password
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Log in
        </button>
      </form>
      
      <div className="mt-4 text-center">
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </AppLayout>
  );
}
