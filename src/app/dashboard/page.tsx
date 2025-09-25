import AppLayout from "@/components/AppLayout";
import ButtonLink from "@/components/ButtonLink";

export default function Dashboard() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-4">Dashboard</h1>

      <p className="mb-6 text-gray-700">
        Welcome to your dashboard. You're logged in!
      </p>
      
      <div className="flex flex-col items-center mt-10 gap-4">
        <ButtonLink href="/logout">Log out</ButtonLink>
      </div>
    </AppLayout>
  );
}
