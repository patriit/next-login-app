import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md mt-6">
      <div className="w-full max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-xl font-bold text-blue-600">LoginApp</span>
        <div className="flex gap-6">
          <Link
            href="/login"
            className="text-blue-600 hover:text-blue-800 px-2 py-1"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-blue-600 hover:text-blue-800 px-2 py-1"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
