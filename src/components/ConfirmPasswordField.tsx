import { useState } from "react";
import InputField from "./InputField";

type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
};

export default function ConfirmPasswordField({
  value,
  onChange,
  password,
}: Props) {
  const [touched, setTouched] = useState(false);
  const match = value === password;

  return (
    <div>
      <InputField
        label="Confirm Password"
        type="password"
        value={value}
        onChange={(e) => {
          onChange(e);
          setTouched(true);
        }}
      />

      {touched && (
        <p className={match ? "text-green-500" : "text-red-500"}>
          {match ? "Passwords match" : "Passwords do not match"}
        </p>
      )}
    </div>
  );
}
