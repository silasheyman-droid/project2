"use client"; // required for React hooks if you add any later

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Zapper</h1>
      <p>This is a minimal test page. No data, no map, no Convex functions — just static content.</p>

      <div className="mt-4 space-y-2">
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          Example item 1
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          Example item 2
        </div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded shadow">
          Example item 3
        </div>
      </div>
    </div>
  );
}
