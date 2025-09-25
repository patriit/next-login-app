import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
    >
      {children}
    </Link>
  );
}
