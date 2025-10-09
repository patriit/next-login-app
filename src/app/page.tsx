import AppLayout from "@/components/AppLayout";

export default function Home() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-6">
        Welcome to LoginApp
      </h1>
      <p className="mb-6 text-gray-700">Log in or register to get started.</p>
    </AppLayout>
  );
}
