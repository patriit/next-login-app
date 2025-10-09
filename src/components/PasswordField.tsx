"use client";

import { useState } from "react";
import InputField from "./InputField";

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function PasswordField({ label, value, onChange }: Props) {
  const [touched, setTouched] = useState(false);

  const lengthValid = value.length >= 12;
  const uppercaseValid = /[A-Z]/.test(value);
  const lowercaseValid = /[a-z]/.test(value);
  const numberValid = /[0-9]/.test(value);
  const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  const rules = [
    {
      isValid: lengthValid,
      success: "Password is long enough",
      error: "Must be at least 12 characters",
    },
    {
      isValid: uppercaseValid,
      success: "Contains uppercase letter",
      error: "Must contain uppercase",
    },
    {
      isValid: lowercaseValid,
      success: "Contains lowercase letter",
      error: "Must contain lowercase",
    },
    {
      isValid: numberValid,
      success: "Contains a number",
      error: "Must contain a number",
    },
    {
      isValid: specialCharValid,
      success: "Contains a special character",
      error: "Must contain a special character",
    },
  ];

  const metRules = rules.filter((rule) => rule.isValid).length;

  let strengthLabel = "Weak";
  if (metRules === 5) {
    strengthLabel = "Strong";
  } else if (metRules >= 3) {
    strengthLabel = "Medium";
  }

  return (
    <div>
      <InputField
        label={label}
        type="password"
        value={value}
        onChange={(e) => {
          onChange(e);
          setTouched(true);
        }}
      />

      {touched && (
        <>
          <div className="flex items-center justify-between mb-2">
            <div className="w-full h-2 rounded bg-gray-200 mr-2">
              <div
                className={`h-2 rounded ${
                  metRules === 5
                    ? "bg-green-500"
                    : metRules >= 3
                    ? "bg-yellow-400"
                    : "bg-red-500"
                }`}
                style={{ width: `${(metRules / rules.length) * 100}%` }}
              />
            </div>
            <span
              className={`text-sm font-medium ${
                metRules === 5
                  ? "text-green-500"
                  : metRules >= 3
                  ? "text-yellow-500"
                  : "text-red-500"
              }`}
            >
              {strengthLabel}
            </span>
          </div>

          <div className="text-sm space-y-1">
            {rules.map((rule, index) => (
              <p
                key={index}
                className={rule.isValid ? "text-green-500" : "text-red-500"}
              >
                {rule.isValid ? rule.success : rule.error}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
