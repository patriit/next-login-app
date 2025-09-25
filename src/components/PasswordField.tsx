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
          <p className={lengthValid ? "text-green-500" : "text-red-500"}>
            {lengthValid ? "Password is long enough" : "Must be at least 12 characters"}
          </p>
          <p className={uppercaseValid ? "text-green-500" : "text-red-500"}>
            {uppercaseValid ? "Contains uppercase letter" : "Must contain uppercase"}
          </p>
          <p className={lowercaseValid ? "text-green-500" : "text-red-500"}>
            {lowercaseValid ? "Contains lowercase letter" : "Must contain lowercase"}
          </p>
          <p className={numberValid ? "text-green-500" : "text-red-500"}>
            {numberValid ? "Contains a number" : "Must contain a number"}
          </p>
          <p className={specialCharValid ? "text-green-500" : "text-red-500"}>
            {specialCharValid ? "Contains a special character" : "Must contain a special character"}
          </p>
        </div>
      )}
    </div>
  );
}
