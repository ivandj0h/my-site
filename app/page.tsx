import Link from "next/link";
export default function Home() {
    return (
        <main className="flex min-h-screen flex-col py-4 px-48">
          <Link
              href="/dashboard"
            className="bg-amber-500 text-white font-medium rounded-md px-4 py-2"
          >Dashboard</Link>
        </main>
    )
}
