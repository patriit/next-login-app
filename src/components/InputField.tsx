type Props = {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function InputField({ label, type, value, onChange }: Props) {
  return (
    <div className="relative mb-4">
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        required
        className="peer w-full border rounded-md p-2 pt-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <label className="absolute left-3 -top-2 bg-white px-1 text-blue-500 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-blue-500 peer-focus:text-sm pointer-events-none">
        {label}
      </label>
    </div>
  );
}
