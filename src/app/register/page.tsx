"use client";

import { useState } from "react";
import Link from "next/link";

import AppLayout from "@/components/AppLayout";
import InputField from "@/components/InputField";
import PasswordField from "@/components/PasswordField";
import ConfirmPasswordField from "@/components/ConfirmPasswordField";

export default function RegistrationPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid =
    password.length >= 12 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[!@#$%^&*(),.?":{}|<>]/.test(password) &&
    password === confirmPassword;

  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-6">Register</h1>

      <form>
        <InputField
          label="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <ConfirmPasswordField
          label="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          password={password}
        />

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
    </AppLayout>
  );
}
