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
      )}
    </div>
  );
}
