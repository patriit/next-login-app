import AppLayout from "@/components/AppLayout";
import ButtonLink from "@/components/ButtonLink";

export default function RegistrationSuccess() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold text-blue-500 mb-6">
        Registration Successful
      </h1>

      <p className="mb-6 text-gray-700">
        Your account has been created successfully.
      </p>
      
      <div className="flex flex-col items-center mt-10 gap-4">
        <ButtonLink href="/login">Go to Login</ButtonLink>
      </div>
    </AppLayout>
  );
}
