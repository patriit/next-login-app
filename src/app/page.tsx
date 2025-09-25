import AppLayout from "@/components/AppLayout";
import ButtonLink from "@/components/ButtonLink";

export default function Home() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-6">
        Welcome to LoginApp
      </h1>

      <div className="flex flex-col items-center mt-10 gap-4">
        <ButtonLink href="/login">Go to Login</ButtonLink>
      </div>
    </AppLayout>
  );
}
