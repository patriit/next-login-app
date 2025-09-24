"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegistrationPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
  const isPasswordValid =
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
    password === confirmPassword;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-400 to-purple-400 font-sans">
      <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-blue-500 mb-6">Register</h1>
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
              type="email"
              placeholder=" "
              required
              className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
              Email
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder=" "
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordTouched(true);
              }}
              className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
              Password
            </label>
            {passwordTouched && (
              <>
                <p
                  className={`${
                    password.length >= 12 ? "text-green-500" : "text-red-500"
                  } text-sm`}
                >
                  {password.length >= 12
                    ? "Password is long enough"
                    : "Password must be at least 12 characters"}
                </p>
                <p
                  className={`text-sm ${
                    /[A-Z]/.test(password) ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/[A-Z]/.test(password)
                    ? "Contains uppercase letter"
                    : "Must contain at least one uppercase letter"}
                </p>
                <p
                  className={`text-sm ${
                    /[a-z]/.test(password) ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/[a-z]/.test(password)
                    ? "Contains lowercase letter"
                    : "Must contain at least one lowercase letter"}
                </p>
                <p
                  className={`text-sm ${
                    /[0-9]/.test(password) ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {/[0-9]/.test(password)
                    ? "Contains a number"
                    : "Must contain at least one number"}
                </p>
                <p
                  className={`text-sm ${
                    /[!@#$%^&*(),.?":{}|<>]/.test(password)
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {/[!@#$%^&*(),.?":{}|<>]/.test(password)
                    ? "Contains a special character"
                    : "Must contain at least one special character"}
                </p>
              </>
            )}
          </div>
          <div className="relative mb-4">
            <input
              type="password"
              placeholder=" "
              required
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setConfirmPasswordTouched(true);
              }}
              className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
              Confirm Password
            </label>
            {confirmPasswordTouched && (
              <p
                className={`text-sm ${
                  password === confirmPassword
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {password === confirmPassword
                  ? "Passwords match"
                  : "Passwords do not match"}
              </p>
            )}
          </div>
          <button
            className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isPasswordValid}
          >
            Register
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="mt-4 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
