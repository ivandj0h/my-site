import Link from "next/link";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col py-4 px-48">
          <Link
              href="/dashboard">Dashboard</Link>
        </main>
    )
}
